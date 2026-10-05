import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

const CartContext = createContext(null)

const STORAGE_KEY = 'megatoys:carrinho'

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const carrinhoSalvo = localStorage.getItem(STORAGE_KEY)

      return carrinhoSalvo
        ? JSON.parse(carrinhoSalvo)
        : []
    } catch {
      return []
    }
  })

  const [openCart, setOpenCart] = useState(false)

  // Salva o carrinho no navegador sempre que ele mudar
  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(cart)
    )
  }, [cart])

  function add(produto) {
    setCart((carrinhoAtual) => {
      const produtoExiste = carrinhoAtual.some(
        (item) => item.id === produto.id
      )

      if (produtoExiste) {
        return carrinhoAtual.map((item) =>
          item.id === produto.id
            ? { ...item, qtd: item.qtd + 1 }
            : item
        )
      }

      return [
        ...carrinhoAtual,
        {
          ...produto,
          qtd: 1,
        },
      ]
    })

    setOpenCart(true)
  }

  function inc(id) {
    setCart((carrinhoAtual) =>
      carrinhoAtual.map((item) =>
        item.id === id
          ? { ...item, qtd: item.qtd + 1 }
          : item
      )
    )
  }

  function dec(id) {
    setCart((carrinhoAtual) =>
      carrinhoAtual
        .map((item) =>
          item.id === id
            ? { ...item, qtd: item.qtd - 1 }
            : item
        )
        .filter((item) => item.qtd > 0)
    )
  }

  function removeItem(id) {
    setCart((carrinhoAtual) =>
      carrinhoAtual.filter((item) => item.id !== id)
    )
  }

  function clear() {
    setCart([])
  }

  const qtd = cart.reduce(
    (soma, item) => soma + item.qtd,
    0
  )

  const subtotal = cart.reduce(
    (soma, item) => soma + item.preco * item.qtd,
    0
  )

  const frete =
    subtotal >= 200 || subtotal === 0
      ? 0
      : 19.90

  const total = subtotal + frete

  const value = useMemo(
    () => ({
      cart,
      openCart,
      setOpenCart,
      add,
      inc,
      dec,
      removeItem,
      clear,
      qtd,
      subtotal,
      frete,
      total,
    }),
    [
      cart,
      openCart,
      qtd,
      subtotal,
      frete,
      total,
    ]
  )

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error(
      'useCart deve ser utilizado dentro de CartProvider'
    )
  }

  return context
}
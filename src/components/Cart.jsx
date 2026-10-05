import { useCart } from '../context/CartContext'

function formatarMoeda(valor) {
  return valor.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}

export default function Cart() {
  const {
    cart,
    openCart,
    setOpenCart,
    inc,
    dec,
    removeItem,
    clear,
    qtd,
    subtotal,
    frete,
    total,
  } = useCart()

  if (!openCart) {
    return null
  }

  function fecharCarrinho() {
    setOpenCart(false)
  }

  function finalizarCompra() {
    alert(
      `Compra simulada finalizada! Total: ${formatarMoeda(total)}`
    )

    clear()
    fecharCarrinho()
  }

  return (
    <div
      className="cart-overlay"
      onClick={fecharCarrinho}
    >
      <aside
        className="cart"
        onClick={(evento) => evento.stopPropagation()}
      >
        <div className="cart-title">
          <b>Carrinho ({qtd})</b>

          <button
            onClick={fecharCarrinho}
            aria-label="Fechar carrinho"
          >
            ✕
          </button>
        </div>

        {!cart.length ? (
          <p className="empty">
            Carrinho vazio
          </p>
        ) : (
          <>
            {cart.map((item) => (
              <div
                className="cart-item"
                key={item.id}
              >
                <img
                  src={`${import.meta.env.BASE_URL}${item.img}`}
                  alt={item.nome}
                />

                <div className="cart-item-info">
                  <b>{item.nome}</b>

                  <div>
                    <button
                      onClick={() => dec(item.id)}
                      aria-label={`Diminuir quantidade de ${item.nome}`}
                    >
                      -
                    </button>

                    <span>{item.qtd}</span>

                    <button
                      onClick={() => inc(item.id)}
                      aria-label={`Aumentar quantidade de ${item.nome}`}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="cart-price">
                  <b>
                    {formatarMoeda(item.preco * item.qtd)}
                  </b>

                  <button
                    onClick={() => removeItem(item.id)}
                  >
                    Excluir
                  </button>
                </div>
              </div>
            ))}

            <div className="totals">
              <div>
                <span>Subtotal</span>
                <span>{formatarMoeda(subtotal)}</span>
              </div>

              <div>
                <span>Frete</span>
                <span>
                  {frete === 0
                    ? 'GRÁTIS'
                    : formatarMoeda(frete)}
                </span>
              </div>

              <div className="grand">
                <span>Total</span>
                <span>{formatarMoeda(total)}</span>
              </div>
            </div>

            <div className="cart-actions">
              <button
                className="secondary continue-shopping"
                onClick={fecharCarrinho}
              >
                CONTINUAR COMPRANDO
              </button>

              <button
                className="checkout"
                onClick={finalizarCompra}
              >
                FINALIZAR - {formatarMoeda(total)}
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}
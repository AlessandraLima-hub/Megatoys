import { useState } from 'react'
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

  const [cep, setCep] = useState('')
  const [endereco, setEndereco] = useState(null)
  const [erroCep, setErroCep] = useState('')
  const [buscandoCep, setBuscandoCep] = useState(false)

  if (!openCart) {
    return null
  }

  function fecharCarrinho() {
    setOpenCart(false)
  }

  function formatarCep(valor) {
    const numeros = valor.replace(/\D/g, '').slice(0, 8)

    if (numeros.length > 5) {
      return `${numeros.slice(0, 5)}-${numeros.slice(5)}`
    }

    return numeros
  }

  async function buscarCep() {
    const cepLimpo = cep.replace(/\D/g, '')

    setErroCep('')
    setEndereco(null)

    if (cepLimpo.length !== 8) {
      setErroCep('Digite um CEP válido com 8 números.')
      return
    }

    try {
      setBuscandoCep(true)

      const resposta = await fetch(
        `https://viacep.com.br/ws/${cepLimpo}/json/`
      )

      if (!resposta.ok) {
        throw new Error('Erro na consulta')
      }

      const dados = await resposta.json()

      if (dados.erro) {
        setErroCep('CEP não encontrado.')
        return
      }

      setEndereco(dados)
    } catch {
      setErroCep(
        'Não foi possível consultar o CEP. Tente novamente.'
      )
    } finally {
      setBuscandoCep(false)
    }
  }

  function finalizarCompra() {
  alert(
    `Compra simulada finalizada! Total: ${formatarMoeda(total)}`
  )

  clear()

  setCep('')
  setEndereco(null)
  setErroCep('')

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

            <div className="cep-box">
              <b>Calcular entrega</b>

              <div className="cep-form">
                <input
                  type="text"
                  value={cep}
                  onChange={(evento) =>
                    setCep(formatarCep(evento.target.value))
                  }
                  placeholder="00000-000"
                  maxLength="9"
                  aria-label="CEP"
                />

                <button
                  type="button"
                  onClick={buscarCep}
                  disabled={buscandoCep}
                >
                  {buscandoCep ? 'BUSCANDO...' : 'BUSCAR'}
                </button>
              </div>

              {erroCep && (
                <p className="cep-error">
                  {erroCep}
                </p>
              )}

              {endereco && (
                <div className="cep-result">
                  <strong>Endereço encontrado:</strong>

                  <span>
                    {endereco.logradouro || 'Logradouro não informado'}
                  </span>

                  {endereco.bairro && (
                    <span>{endereco.bairro}</span>
                  )}

                  <span>
                    {endereco.localidade} - {endereco.uf}
                  </span>

                  <span>CEP: {endereco.cep}</span>
                </div>
              )}
            </div>

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
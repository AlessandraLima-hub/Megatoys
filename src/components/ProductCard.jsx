import { useCart } from '../context/CartContext'

export default function ProductCard({ produto }) {
  const { add } = useCart()

  const imagemProduto = `${import.meta.env.BASE_URL}${produto.img}`

  const precoFormatado = produto.preco.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  function tratarErroImagem(evento) {
    evento.currentTarget.src =
      `https://picsum.photos/seed/megatoys${produto.id}/400/400`

    evento.currentTarget.onerror = null
  }

  return (
    <article className="product-card">
      {produto.tag && (
        <span className="tag">
          {produto.tag}
        </span>
      )}

      <img
        src={imagemProduto}
        alt={produto.nome}
        loading="lazy"
        onError={tratarErroImagem}
      />

      <div className="product-info">
        <h3>{produto.nome}</h3>

        <div className="rating">
          ★★★★★ <span>({produto.aval})</span>
        </div>

        <strong>{precoFormatado}</strong>

        <button onClick={() => add(produto)}>
          COMPRAR
        </button>
      </div>
    </article>
  )
}
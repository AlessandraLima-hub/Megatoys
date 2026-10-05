import ProductCard from './ProductCard'

export default function ProductGrid({ produtos }) {
  if (!produtos.length) {
    return (
      <p className="empty">
        Nenhum produto encontrado.
      </p>
    )
  }

  return (
    <div className="product-grid">
      {produtos.map((produto) => (
        <ProductCard
          key={produto.id}
          produto={produto}
        />
      ))}
    </div>
  )
}
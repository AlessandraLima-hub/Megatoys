import ProductGrid from '../components/ProductGrid'

export default function Ofertas({ produtos }) {
  const ofertas = produtos.filter(
    (produto) =>
      produto.tag === 'OFERTA' ||
      produto.tag === '25% OFF'
  )

  return (
    <section className="section">
      <h1>Ofertas</h1>

      <p className="lead">
        Seleção de produtos promocionais da MegaToys.
      </p>

      <ProductGrid produtos={ofertas} />
    </section>
  )
}
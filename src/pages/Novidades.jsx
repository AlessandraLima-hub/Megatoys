import ProductGrid from '../components/ProductGrid'

export default function Novidades({ produtos }) {
  const novidades = [...produtos]
    .sort((produtoA, produtoB) => produtoB.id - produtoA.id)
    .slice(0, 20)

  return (
    <section className="section">
      <h1>Novidades</h1>

      <p className="lead">
        Os produtos adicionados mais recentemente ao catálogo.
      </p>

      <ProductGrid produtos={novidades} />
    </section>
  )
}
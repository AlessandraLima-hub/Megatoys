import { useNavigate } from 'react-router-dom'
import Banner from '../components/Banner'
import ProductGrid from '../components/ProductGrid'
import { categorias } from '../data/catalogo'

export default function Home({ produtos }) {
  const navigate = useNavigate()

  function abrirCategoria(categoria) {
    navigate(`/loja?categoria=${encodeURIComponent(categoria)}`)
  }

  return (
    <>
      <Banner />

      <section className="section">
        <h2>Categorias</h2>

        <div className="category-grid">
          {categorias.map((categoria) => (
            <button
              key={categoria.nome}
              onClick={() => abrirCategoria(categoria.nome)}
            >
              <span>{categoria.icon}</span>
              {categoria.nome}
            </button>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>
          Produtos em Destaque{' '}
          <small>({produtos.length} produtos disponíveis)</small>
        </h2>

        <ProductGrid produtos={produtos.slice(0, 12)} />
      </section>
    </>
  )
}
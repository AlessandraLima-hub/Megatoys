import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductGrid from '../components/ProductGrid'
import { categorias } from '../data/catalogo'

export default function Loja({ produtos }) {
  const [params, setParams] = useSearchParams()
  const [pagina, setPagina] = useState(1)

  const categoriaSelecionada =
    params.get('categoria') || 'TODOS'

  const produtosFiltrados = useMemo(() => {
    if (categoriaSelecionada === 'TODOS') {
      return produtos
    }

    return produtos.filter(
      (produto) => produto.cat === categoriaSelecionada
    )
  }, [produtos, categoriaSelecionada])

  const produtosPorPagina = 20

  const totalPaginas = Math.max(
    1,
    Math.ceil(produtosFiltrados.length / produtosPorPagina)
  )

  const inicio = (pagina - 1) * produtosPorPagina
  const fim = inicio + produtosPorPagina

  const produtosVisiveis = produtosFiltrados.slice(
    inicio,
    fim
  )

  useEffect(() => {
    setPagina(1)
  }, [categoriaSelecionada, produtos.length])

  function selecionarCategoria(categoria) {
    setPagina(1)

    if (categoria === 'TODOS') {
      setParams({})
    } else {
      setParams({
        categoria,
      })
    }
  }

  function mudarPagina(novaPagina) {
    setPagina(novaPagina)

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <section className="section">
      <h1>Loja</h1>

      <div className="filters">
        <button
          className={
            categoriaSelecionada === 'TODOS'
              ? 'active'
              : ''
          }
          onClick={() => selecionarCategoria('TODOS')}
        >
          Todos
        </button>

        {categorias.map((categoria) => (
          <button
            key={categoria.nome}
            className={
              categoriaSelecionada === categoria.nome
                ? 'active'
                : ''
            }
            onClick={() =>
              selecionarCategoria(categoria.nome)
            }
          >
            {categoria.nome}
          </button>
        ))}
      </div>

      <ProductGrid produtos={produtosVisiveis} />

      {produtosFiltrados.length > 0 && (
        <div className="pagination">
          <button
            disabled={pagina === 1}
            onClick={() => mudarPagina(pagina - 1)}
          >
            Anterior
          </button>

          {Array.from(
            { length: totalPaginas },
            (_, indice) => indice + 1
          ).map((numero) => (
            <button
              key={numero}
              className={
                numero === pagina
                  ? 'active'
                  : ''
              }
              onClick={() => mudarPagina(numero)}
            >
              {numero}
            </button>
          ))}

          <button
            disabled={pagina === totalPaginas}
            onClick={() => mudarPagina(pagina + 1)}
          >
            Próxima
          </button>
        </div>
      )}
    </section>
  )
}
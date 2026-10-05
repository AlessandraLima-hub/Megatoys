import { useEffect, useMemo, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Cart from './components/Cart'

import Home from './pages/Home'
import Loja from './pages/Loja'
import Novidades from './pages/Novidades'
import Ofertas from './pages/Ofertas'
import Sobre from './pages/Sobre'
import NotFound from './pages/NotFound'

import { carregarProdutos } from './services/produtosService'

export default function App() {
  const [produtos, setProdutos] = useState([])
  const [busca, setBusca] = useState('')
  const [loading, setLoading] = useState(true)
  const [erro, setErro] = useState('')

  useEffect(() => {
    carregarProdutos()
      .then((dados) => {
        setProdutos(dados)
      })
      .catch(() => {
        setErro('Não foi possível carregar os produtos.')
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  const produtosFiltrados = useMemo(() => {
    const termo = busca
      .trim()
      .toLowerCase()

    if (!termo) {
      return produtos
    }

    return produtos.filter((produto) => {
      const nome = produto.nome.toLowerCase()
      const categoria = produto.cat.toLowerCase()

      return (
        nome.includes(termo) ||
        categoria.includes(termo)
      )
    })
  }, [produtos, busca])

  return (
    <div className="app">
      <Header
        busca={busca}
        setBusca={setBusca}
      />

      <main>
        {loading ? (
          <div className="status">
            Carregando produtos...
          </div>
        ) : erro ? (
          <div className="status error">
            {erro}
          </div>
        ) : (
          <Routes>
            <Route
              path="/"
              element={
                <Home produtos={produtosFiltrados} />
              }
            />

            <Route
              path="/loja"
              element={
                <Loja produtos={produtosFiltrados} />
              }
            />

            <Route
              path="/novidades"
              element={
                <Novidades produtos={produtosFiltrados} />
              }
            />

            <Route
              path="/ofertas"
              element={
                <Ofertas produtos={produtosFiltrados} />
              }
            />

            <Route
              path="/sobre"
              element={<Sobre />}
            />

            <Route
              path="*"
              element={<NotFound />}
            />
          </Routes>
        )}
      </main>

      <Footer />

      <Cart />
    </div>
  )
}
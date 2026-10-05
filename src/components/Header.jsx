import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Header({ busca, setBusca }) {
  const { qtd, setOpenCart } = useCart()
  const navigate = useNavigate()
  const [menuAberto, setMenuAberto] = useState(false)

  const links = [
    ['/', 'Início'],
    ['/loja', 'Loja'],
    ['/novidades', 'Novidades'],
    ['/ofertas', 'Ofertas'],
    ['/sobre', 'Sobre'],
  ]

  function fecharMenu() {
    setMenuAberto(false)
  }

  return (
    <>
      <header className="header">
        <NavLink className="logo" to="/" onClick={fecharMenu}>
          MEGA<br />TOYS
        </NavLink>

        <nav className={menuAberto ? 'nav nav-open' : 'nav'}>
          {links.map(([to, nome]) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={fecharMenu}
            >
              {nome}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="cart-button"
            onClick={() => setOpenCart(true)}
            aria-label="Abrir carrinho"
          >
            🛒 <span>{qtd}</span>
          </button>

          <button
            className="menu-button"
            onClick={() => setMenuAberto(!menuAberto)}
            aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuAberto}
          >
            {menuAberto ? '✕' : '☰'}
          </button>
        </div>
      </header>

      <div className="search-wrap">
        <div className="search">
          <span>🔍</span>

          <input
            value={busca}
            onChange={(e) => {
              setBusca(e.target.value)

              if (e.target.value) {
                navigate('/loja')
              }
            }}
            placeholder="Buscar brinquedos..."
          />
        </div>
      </div>
    </>
  )
}
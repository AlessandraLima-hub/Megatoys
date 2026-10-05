import { Link } from 'react-router-dom'

export default function Sobre() {
  return (
    <section className="about section">
      <div className="about-box">

        <div className="footer-logo">
          MEGA<br />TOYS
        </div>

        <h1>Sobre a MegaToys</h1>

        <p>
          A MegaToys é uma loja virtual fictícia criada como
          Projeto Integrador de Frontend em React.
          O objetivo é demonstrar na prática conceitos como
          navegação SPA, componentização, gerenciamento de estado,
          efeitos, persistência local e responsividade.
        </p>

        <h2>🎯 Nossa proposta</h2>

        <p>
          Oferecer uma experiência simples e intuitiva de uma
          loja virtual de brinquedos, com catálogo, busca,
          categorias, ofertas, carrinho e simulação de compra.
        </p>

        <h2>🧩 Recursos do projeto</h2>

        <ul>
          <li>120 produtos demonstrativos em 6 categorias</li>
          <li>Busca de produtos</li>
          <li>Filtro por categorias</li>
          <li>Página de ofertas</li>
          <li>Paginação do catálogo</li>
          <li>Carrinho de compras</li>
          <li>Persistência do carrinho com localStorage</li>
          <li>Gerenciamento de estado com Context API</li>
          <li>Navegação SPA com React Router</li>
          <li>Uso de useState e useEffect</li>
          <li>Layout responsivo para desktop, tablet e celular</li>
        </ul>

        <h2>💻 Tecnologias utilizadas</h2>

        <ul>
          <li>React</li>
          <li>JavaScript</li>
          <li>React Router DOM</li>
          <li>HTML e CSS</li>
          <li>Vite</li>
          <li>localStorage</li>
        </ul>

        <h2>📚 Projeto acadêmico</h2>

        <p>
          Este site foi desenvolvido exclusivamente para fins
          acadêmicos e demonstrativos. A MegaToys apresentada
          neste projeto não representa uma empresa ou comércio real.
        </p>

        <div className="about-actions">
          <Link
            className="primary"
            to="/loja"
          >
            IR PARA LOJA
          </Link>

          <Link
            className="secondary"
            to="/ofertas"
          >
            VER OFERTAS
          </Link>
        </div>

      </div>
    </section>
  )
}
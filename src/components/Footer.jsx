import { Link } from 'react-router-dom'
import { categorias } from '../data/catalogo'

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">

        <div>
          <div className="footer-logo">
            MEGA<br />TOYS
          </div>

          <p>
            Projeto acadêmico de uma loja virtual de brinquedos,
            com 120 produtos em 6 categorias.
          </p>
        </div>

        <div>
          <b>INSTITUCIONAL</b>

          <Link to="/sobre">
            Sobre a MegaToys
          </Link>

          <span>Política de Privacidade</span>
          <span>Trocas e Devoluções</span>
        </div>

        <div>
          <b>CATEGORIAS</b>

          {categorias.map((categoria) => (
            <Link
              key={categoria.nome}
              to={`/loja?categoria=${encodeURIComponent(categoria.nome)}`}
            >
              {categoria.nome}
            </Link>
          ))}
        </div>

        <div>
          <b>ATENDIMENTO</b>

          <span>📞 (21) 99999-9999</span>
          <span>✉️ contato@megatoys.com.br</span>
          <span>🕘 Seg a Sáb, 9h às 19h</span>

          <strong>
            FRETE GRÁTIS acima de R$ 200
          </strong>
        </div>

      </div>

      <div className="copyright">
        MegaToys © 2026 • Projeto acadêmico demonstrativo
      </div>
    </footer>
  )
}
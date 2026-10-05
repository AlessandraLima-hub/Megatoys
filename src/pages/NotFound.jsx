import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="not-found">
      <div>
        <strong>404</strong>

        <h1>Página não encontrada</h1>

        <p>
          O endereço acessado não existe na MegaToys.
        </p>

        <Link to="/">
          Voltar para o início
        </Link>
      </div>
    </section>
  )
}
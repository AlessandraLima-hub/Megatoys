import { useEffect, useState } from 'react'

const banners = [
  {
    titulo: 'JOGUE GRANDE. CONSTRUA GRANDE.',
    sub: 'Brinquedos, blocos, pelúcias, jogos de tabuleiro e muito mais.',
    img: 'banner1.jpg.JPG',
  },
  {
    titulo: 'OFERTAS IMPERDÍVEIS!',
    sub: 'Até 50% OFF essa semana com super desconto.',
    img: 'banner2.jpg.JPG',
  },
  {
    titulo: 'NOVIDADES QUE CHEGARAM!',
    sub: 'Lançamentos e brinquedos para todas as idades.',
    img: 'banner3.jpg.JPG',
  },
]

export default function Banner() {
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    const intervalo = setInterval(() => {
      setSlide((slideAtual) => (slideAtual + 1) % banners.length)
    }, 4000)

    return () => clearInterval(intervalo)
  }, [])

  const bannerAtual = banners[slide]

  return (
    <section className="banner">
      <img
        src={`${import.meta.env.BASE_URL}${bannerAtual.img}`}
        alt={bannerAtual.titulo}
      />

      <div className="banner-shade" />

      <div className="banner-copy">
        <h1>{bannerAtual.titulo}</h1>
        <p>{bannerAtual.sub}</p>
      </div>
    </section>
  )
}
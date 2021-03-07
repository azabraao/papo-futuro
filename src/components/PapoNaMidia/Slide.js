import React, { memo, useState } from "react"
import Slider from "react-slick"
import Card from "./Card"
import { graphql, useStaticQuery } from "gatsby"
import { SlideArrow } from "./styled"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Slide = () => {
  const [slideDirection, setSlideDirection] = useState("right")
  const [currentSlide, setCurrentSlide] = useState(0)

  const data = useStaticQuery(
    graphql`
      query {
        apagao: file(relativePath: { eq: "apagao.png" }) {
          childImageSharp {
            fluid(maxWidth: 400, quality: 70) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        gerazaoz: file(relativePath: { eq: "gerazao-z.png" }) {
          childImageSharp {
            fluid(maxWidth: 400, quality: 70) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  const onArrowClick = direction => setSlideDirection(direction)

  const apagao = data.apagao.childImageSharp.fluid
  const gerazaoz = data.gerazaoz.childImageSharp.fluid

  const settings = {
    className: "center",
    dots: false,
    infinite: false,
    lazyLoad: true,
    centerMode: true,
    speed: 500,
    swipeToSlide: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    afterChange: current => setCurrentSlide(current),
    nextArrow: (
      <NextArrow
        currentSlide={currentSlide}
        onArrowClick={onArrowClick}
        slideDirection={slideDirection}
      />
    ),
    prevArrow: (
      <PrevArrow
        currentSlide={currentSlide}
        onArrowClick={onArrowClick}
        slideDirection={slideDirection}
      />
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <Slider {...settings}>
      <Card
        image={apagao}
        preTitle="19 de agosto de 2020 - Estadão"
        title="apagão educacional e inclusão digital: ação solidária contra 
        a desigualdade"
        description="As fragilidades que persistem nas iniciativas de universalização das políticas públicas e no Brasil criam uma maior dificuldade no enfrentamento da pandemia. O caso da Educação, determinante para o desenvolvimento de nosso país, não é diferente. (…)"
        link="https://politica.estadao.com.br/blogs/gestao-politica-e-sociedade/apagao-educacional-e-inclusao-digital-acao-solidaria-contra-a-desigualdade/"
      />
      <Card
        image={gerazaoz}
        preTitle="07 de agosto de 2020 - Glamurama"
        title="geração z: Desculpa professor, a internet caiu aqui! As dificuldades do ensino à distância"
        description="Depois de um mês de férias viajando do meu quarto para a cozinha, do banheiro para a sala, e do escritório até a lavanderia, minhas aulas voltaram. Não vou poder mais tomar sol de manhã, jogar videogame a tarde, passar horas no celular à noite e dormir às 4 da manhã depois de ver três filmes de madrugada.(…)"
        link="https://glamurama.uol.com.br/geracao-z-desculpa-professor-a-internet-caiu-aqui-as-dificuldades-do-ensino-a-distancia/"
      />
    </Slider>
  )
}

const PrevArrow = ({ onClick, onArrowClick, slideDirection, currentSlide }) => {
  if (currentSlide === 0) return null

  return (
    <SlideArrow
      isLeft={true}
      active={slideDirection === "left"}
      onClick={e => {
        onArrowClick("left")
        onClick && onClick(e)
      }}
    >
      <svg
        width="25"
        height="20"
        viewBox="0 0 25 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="prev prevprev"
      >
        <path d="M10.862 0L1.8049 8.23309L0 9.87375L1.8049 11.5134L10.862 19.7368L12.6668 18.1015L4.8862 11.0332H25V8.71467H4.8862L12.6668 1.64323L10.862 0Z" />
      </svg>
    </SlideArrow>
  )
}

const NextArrow = ({ onClick, onArrowClick, slideDirection, currentSlide }) => {
  if (currentSlide > 0) return null

  return (
    <SlideArrow
      isLeft={false}
      onClick={e => {
        onArrowClick("right")
        onClick && onClick(e)
      }}
      active={slideDirection === "right"}
    >
      <svg
        width="25"
        height="20"
        viewBox="0 0 25 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="next"
      >
        <path d="M14.138 0L23.1951 8.26588L25 9.91312L23.1951 11.5592L14.138 19.8154L12.3331 18.1736L20.1138 11.0771H0V8.74934H20.1138L12.3331 1.64978L14.138 0Z" />
      </svg>
    </SlideArrow>
  )
}

export default memo(Slide)

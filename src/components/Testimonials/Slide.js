import React, { memo, useState } from "react"
import Slider from "react-slick"
import Card from "./Card"
import { graphql, useStaticQuery } from "gatsby"
import { SlideArrow } from "./styled"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Slide = () => {
  const [slideDirection, setSlideDirection] = useState("")

  const data = useStaticQuery(
    graphql`
      query {
        adilsonRodrigues: file(relativePath: { eq: "adilson-rodrigues.png" }) {
          childImageSharp {
            fixed(width: 200, height: 200, quality: 70) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        daniel: file(relativePath: { eq: "daniel.png" }) {
          childImageSharp {
            fixed(width: 200, height: 200, quality: 70) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        andressa: file(relativePath: { eq: "andressa.png" }) {
          childImageSharp {
            fixed(width: 200, height: 200, quality: 70) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  const onArrowClick = direction => setSlideDirection(direction)

  const adilsonRodrigues = data.adilsonRodrigues.childImageSharp.fixed
  const daniel = data.daniel.childImageSharp.fixed
  const andressa = data.andressa.childImageSharp.fixed

  const settings = {
    className: "center",
    dots: false,
    infinite: true,
    lazyLoad: true,
    centerMode: true,
    speed: 500,
    swipeToSlide: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: (
      <NextArrow onArrowClick={onArrowClick} slideDirection={slideDirection} />
    ),
    prevArrow: (
      <PrevArrow onArrowClick={onArrowClick} slideDirection={slideDirection} />
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
        image={adilsonRodrigues}
        name="Adilson Rodrigues"
        title="20 anos, Curso Popular Mafalda"
        description="O empenho do Projeto Papo Futuro está contribuindo muito no meu sonho de ser o primeiro da minha família conseguir entrar na Universidade pública com os equipamentos doados."
      />
      <Card
        image={daniel}
        name="Daniel"
        title="21 anos, Cursinho Popular Quantum"
        description="Acredito que o Papo Futuro não é apenas uma ajuda e sim uma ponte entre mim e realização dos meus sonhos."
      />
      <Card
        image={andressa}
        name="Andressa"
        title="19 anos, Cursinho Vitto Giannotti"
        description="O projeto papo futuro me doou um notebook em ótimas condições para que eu possa dar continuidade aos estudos em casa. Agradeço imensamente aos idealizadores do projeto, não sei se conseguiria continuar a estudar sem recursos."
      />
    </Slider>
  )
}

const PrevArrow = ({ onClick, onArrowClick, slideDirection }) => {
  return (
    <SlideArrow
      isLeft={true}
      active={slideDirection === "left"}
      onClick={e => {
        onArrowClick("left")
        onClick(e)
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

const NextArrow = ({ onClick, onArrowClick, slideDirection }) => {
  return (
    <SlideArrow
      isLeft={false}
      onClick={e => {
        onArrowClick("right")
        onClick(e)
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

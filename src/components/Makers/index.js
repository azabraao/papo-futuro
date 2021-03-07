import React, { memo, useEffect, useState } from "react"
import { MakersWrapper } from "./styled"
import Section from "../Section"
import Title from "../Title"
import Container from "../Container"
import { useStaticQuery, graphql } from "gatsby"
import Card from "./Card"
import Slide from "../Slide"

const Makers = () => {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 1170)
  }, [])

  const data = useStaticQuery(
    graphql`
      query {
        caio: file(relativePath: { eq: "caio-santini.png" }) {
          childImageSharp {
            fixed(width: 120, height: 120, quality: 70) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        gabriela: file(relativePath: { eq: "gabriela-morete.png" }) {
          childImageSharp {
            fixed(width: 120, height: 120, quality: 70) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  const caio = data.caio.childImageSharp.fixed
  const gabriela = data.gabriela.childImageSharp.fixed

  const profiles = [
    {
      image: caio,
      title: "Caio Santini",
      link: "https://www.example.com",
      info: "FGV",
    },
    {
      image: gabriela,
      title: "Gabriela Morete",
      link: "https://www.example.com",
      info: "FGV",
    },
    {
      image: caio,
      title: "Caio Santini",
      link: "https://www.example.com",
      info: "FGV",
    },
    {
      image: gabriela,
      title: "Gabriela Morete",
      link: "https://www.example.com",
      info: "FGV",
    },
    {
      image: caio,
      title: "Caio Santini",
      link: "https://www.example.com",
      info: "FGV",
    },
    {
      image: gabriela,
      title: "Gabriela Morete",
      link: "https://www.example.com",
      info: "FGV",
    },
    {
      image: caio,
      title: "Caio Santini",
      link: "https://www.example.com",
      info: "FGV",
    },
    {
      image: gabriela,
      title: "Gabriela Morete",
      link: "https://www.example.com",
      info: "FGV",
    },
  ]

  return (
    <Section id="equipe">
      <Container>
        <MakersWrapper>
          <Title
            lineColor="danger-dark"
            titleColor="danger"
            centeredOnMobile={true}
          >
            quem faz acontecer
          </Title>
          <div className="Makers__list">
            {isDesktop ? (
              profiles.map(({ image, title, link, info }, index) => (
                <Card
                  key={index}
                  image={image}
                  title={title}
                  linkedinLink={link}
                  initialInfo={info}
                />
              ))
            ) : (
              <Slide slideCentered={false}>
                {profiles.map(({ image, title, link, info }, index) => (
                  <Card
                    key={index}
                    image={image}
                    title={title}
                    linkedinLink={link}
                    initialInfo={info}
                  />
                ))}
              </Slide>
            )}
          </div>
        </MakersWrapper>
      </Container>
    </Section>
  )
}

export default memo(Makers)

import React, { memo, useEffect, useState } from "react"
import { ContatoWrapper } from "./styled"
import Section from "../Section"
import Title from "../Title"
import Container from "../Container"
import { WhatsappIcon, LinkedIn, Email, Instagram } from "./Icons"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Contato = () => {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 1170)
  }, [])

  const data = useStaticQuery(
    graphql`
      query {
        image: file(relativePath: { eq: "contato-bg.png" }) {
          childImageSharp {
            fluid(maxWidth: 700, quality: 70) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  const imageData = data.image.childImageSharp.fluid

  return (
    <Section noPaddingBottom={true} id="contato">
      <ContatoWrapper>
        <Container>
          <Title
            lineColor="primary-lighter"
            titleColor="primary"
            centeredOnMobile={true}
          >
            contato
          </Title>
          <div className="Contato__description color-dark">
            Para entrar em contato conosco você pode enviar um{" "}
            <strong> e-mail </strong>, falar via
            <strong> WhatsApp </strong> , nos encontrar pelas{" "}
            <strong> redes sociais </strong>, ou, caso seja aluno ou queira
            ajudar um aluno, preencher nosso formulário :)
          </div>
          <div className="Contato__links">
            <a href="#" className="Contato__link whatsapp">
              <WhatsappIcon />
              <p>Comece um chat</p>
            </a>
            <a href="#" className="Contato__link">
              <Email />
              <p>envie um e-mail</p>
            </a>
            <a href="#" className="Contato__link">
              <Instagram />
              <p>Instagram</p>
            </a>
            <a href="#" className="Contato__link">
              <LinkedIn />
              <p>Linkedin</p>
            </a>
            <a href="#" className="Contato__link sou-aluno">
              <p>
                Sou aluno ou conheço um aluno
                {isDesktop && "que precisa de ajuda"}
              </p>
            </a>
          </div>
        </Container>
        <Img className="Contato__bottomImage" fluid={imageData} />
      </ContatoWrapper>
    </Section>
  )
}

export default memo(Contato)

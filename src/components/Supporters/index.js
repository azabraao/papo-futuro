import React, { memo, useState, useEffect } from "react"
import { SupportersWrapper } from "./styled"
import Section from "../Section"
import Title from "../Title"
import Container from "../Container"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Supporters = () => {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 1170)
  }, [])

  const data = useStaticQuery(
    graphql`
      query {
        make: file(relativePath: { eq: "apoiador-make.png" }) {
          childImageSharp {
            fixed(width: 100, height: 30, quality: 80) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        fluke: file(relativePath: { eq: "apoiador-fluke.png" }) {
          childImageSharp {
            fixed(width: 100, height: 100, quality: 80) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        meSalva: file(relativePath: { eq: "apoiador-me-salva.png" }) {
          childImageSharp {
            fixed(width: 100, height: 50, quality: 80) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        beesOfLove: file(relativePath: { eq: "apoiador-bees-of-love.png" }) {
          childImageSharp {
            fixed(width: 100, height: 100, quality: 80) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  const make = data.make.childImageSharp.fixed
  const fluke = data.fluke.childImageSharp.fixed
  const meSalva = data.meSalva.childImageSharp.fixed
  const beesOfLove = data.beesOfLove.childImageSharp.fixed

  return (
    <Section id="apoiadores" background="gray-lighter" noPaddingBottom={true}>
      <Container>
        <SupportersWrapper>
          <header>
            <Title
              lineColor="primary-lighter"
              titleColor="primary"
              centeredOnMobile={true}
            >
              apoiadores
            </Title>
            <p>
              Confira as empresas e pessoas que já estão conectadas com a nossa
              causa:
            </p>
          </header>

          <div className="Supporters__logo">
            {isDesktop ? (
              <>
                <Img className="Supporters__logo-img" fixed={make} />
                <Img className="Supporters__logo-img" fixed={fluke} />
                <Img className="Supporters__logo-img" fixed={meSalva} />
                <Img className="Supporters__logo-img" fixed={beesOfLove} />
              </>
            ) : (
              <>
                <div className="Supporters__logo-row">
                  <Img className="Supporters__logo-img" fixed={make} />
                  <Img className="Supporters__logo-img" fixed={fluke} />
                </div>
                <div className="Supporters__logo-row">
                  <Img className="Supporters__logo-img" fixed={meSalva} />
                  <Img className="Supporters__logo-img" fixed={beesOfLove} />
                </div>
              </>
            )}
          </div>
        </SupportersWrapper>
      </Container>
    </Section>
  )
}

export default memo(Supporters)

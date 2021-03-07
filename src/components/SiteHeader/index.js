import React, { memo } from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import * as S from "./styled"
import Container from "../Container"

const SiteHeader = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        mobileImage: file(relativePath: { eq: "menino-sorrindo.png" }) {
          childImageSharp {
            fluid(maxWidth: 1170, quality: 60) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        desktopImage: file(relativePath: { eq: "header-background.png" }) {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 60) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  const sources = [
    data.mobileImage.childImageSharp.fluid,
    {
      ...data.desktopImage.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
  ]

  return (
    <S.SiteHeaderWrapper id="home">
      <BackgroundImage
        Tag="section"
        className="SiteHeader"
        fluid={sources}
        backgroundColor={`#040e18`}
      >
        {children}
        <Container>
          <header className="SiteHeader__titles">
            <h1>papo futuro</h1>
            <h2>conectando pessoas a um futuro melhor.</h2>
          </header>
          <div className="SiteHeader__buttons">
            <a href="#o-projeto" className="SiteHeader__button-1">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23.237"
                  height="26.737"
                  viewBox="0 0 23.237 26.737"
                >
                  <path
                    id="noun_Arrow_Left_2682937"
                    data-name="noun_Arrow Left_2682937"
                    d="M11.616,23.237,1.93,13.543,0,11.612l1.93-1.93L11.616,0l1.93,1.926L5.226,10.247H26.737v2.73H5.226L13.547,21.3Z"
                    transform="translate(0 26.737) rotate(-90)"
                    fill="#33a0ff"
                  />
                </svg>
              </div>
              Conheça o projeto
            </a>
            <a href="#doe-agora" className="SiteHeader__button-2">
              Doe agora
            </a>
          </div>
        </Container>
      </BackgroundImage>
    </S.SiteHeaderWrapper>
  )
}

export default memo(SiteHeader)

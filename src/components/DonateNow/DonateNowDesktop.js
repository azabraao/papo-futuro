import React, { memo } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Container from "../Container"
import BackgroundImage from "gatsby-background-image"
import DonateNowButtons from "./DonateNowButtons"

const DonateNowDesktop = () => {
  const data = useStaticQuery(
    graphql`
      query {
        donateNowAndPersonPhoto: file(
          relativePath: { eq: "nubia-doe-agora.png" }
        ) {
          childImageSharp {
            fluid(maxWidth: 180, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  const donateNowImage = data.donateNowAndPersonPhoto.childImageSharp.fluid

  return (
    <BackgroundImage Tag="div" fluid={donateNowImage} style={{ zIndex: 1 }}>
      <Container>
        <div className="DonateNow__inside">
          <div className="DonateNow__column DonateNow__column-donate">
            <h2>doe agora</h2>
            <div className="DonateNow__buttons">
              <DonateNowButtons />
            </div>
          </div>
          <div className="DonateNow__column DonateNow__column-nubia">
            <article>
              <p>Núbia, 16 anos</p>
              <small>Futura médica</small>
            </article>
          </div>
        </div>
      </Container>
    </BackgroundImage>
  )
}

export default memo(DonateNowDesktop)

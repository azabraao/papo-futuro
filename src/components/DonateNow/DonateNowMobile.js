import React, { memo } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Container from "../Container"
import BackgroundImage from "gatsby-background-image"
import DonateNowButtons from "./DonateNowButtons"

const DonateNowMobile = () => {
  const data = useStaticQuery(
    graphql`
      query {
        donateNow: file(relativePath: { eq: "doe-agora.png" }) {
          childImageSharp {
            fluid(maxWidth: 150) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        personPhoto: file(relativePath: { eq: "nubia.png" }) {
          childImageSharp {
            fluid(maxWidth: 180, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
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

  const donateNowImage = data.donateNow.childImageSharp.fluid
  const personPhotoImage = data.personPhoto.childImageSharp.fluid

  return (
    <div className="DonateNow__inside">
      <BackgroundImage
        Tag="div"
        fluid={donateNowImage}
        className="DonateNow__column DonateNow__column-donate"
      >
        <Container>
          <h2>doe agora</h2>
          <div className="DonateNow__buttons">
            <DonateNowButtons />
          </div>
        </Container>
      </BackgroundImage>
      <BackgroundImage
        Tag="div"
        fluid={personPhotoImage}
        className="DonateNow__column DonateNow__column-nubia"
      >
        <Container>
          <article>
            <p>Núbia, 16 anos</p>
            <small>Futura médica</small>
          </article>
        </Container>
      </BackgroundImage>
    </div>
  )
}

export default memo(DonateNowMobile)

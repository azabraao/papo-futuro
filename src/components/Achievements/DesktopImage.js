import React, { memo } from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const Achievements = () => {
  const data = useStaticQuery(
    graphql`
      query {
        image: file(relativePath: { eq: "nossas-conquistas.png" }) {
          childImageSharp {
            fluid(maxWidth: 400, quality: 70) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  const imageData = data.image.childImageSharp.fluid

  return (
    <BackgroundImage
      Tag="div"
      className="Achievements__desktopImage"
      fluid={imageData}
    ></BackgroundImage>
  )
}

export default memo(Achievements)

import React, { memo } from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const SideImage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        image: file(relativePath: { eq: "pessoas-mexendo-no-notebook.png" }) {
          childImageSharp {
            fluid(maxWidth: 1170, quality: 60) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `
  )

  const imageData = data.image.childImageSharp.fluid

  return (
    <BackgroundImage
      Tag="section"
      className="SideImage"
      fluid={imageData}
    ></BackgroundImage>
  )
}

export default memo(SideImage)

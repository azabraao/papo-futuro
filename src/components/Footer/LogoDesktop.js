import React, { memo } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const LogoDesktop = () => {
  const data = useStaticQuery(
    graphql`
      query {
        logo: file(relativePath: { eq: "logo-papo-futuro-primary.png" }) {
          childImageSharp {
            fixed(width: 400, height: 140, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  const logo = data.logo.childImageSharp.fixed

  return <Img fixed={logo} />
}

export default memo(LogoDesktop)

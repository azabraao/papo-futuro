import React, { memo } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const LogoMobile = () => {
  const data = useStaticQuery(
    graphql`
      query {
        logo: file(relativePath: { eq: "logo-papo-futuro-primary.png" }) {
          childImageSharp {
            fixed(width: 180, height: 63, quality: 100) {
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

export default memo(LogoMobile)

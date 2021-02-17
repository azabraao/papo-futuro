import React, { memo } from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styled"

const Logo = () => {
  const data = useStaticQuery(
    graphql`
      query {
        mobileImage: file(relativePath: { eq: "logo-papo-futuro-white.png" }) {
          childImageSharp {
            fluid(maxWidth: 150) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        desktopImage: file(
          relativePath: { eq: "logo-papo-futuro-primary.png" }
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

  const sources = [
    data.mobileImage.childImageSharp.fluid,
    {
      ...data.desktopImage.childImageSharp.fluid,
      media: `(min-width: 1170px)`,
    },
  ]

  return <S.LogoWrapper fluid={sources} />
}

export default memo(Logo)

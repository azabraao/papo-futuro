import styled from "styled-components"
import media from "styled-media-query"
import Img from "gatsby-image"

export const LogoWrapper = styled(Img)`
  height: 45px;
  width: 127px;

  ${media.greaterThan("large")`
    height: 63px;
    width: 180px;
  `}
`

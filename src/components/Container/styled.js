import styled from "styled-components"
import media from "styled-media-query"

export const ContainerWrapper = styled.div`
  padding: 0 2rem;

  ${media.greaterThan("medium")`
        margin: 0 auto;
        width: 80%;
  `}

  ${media.greaterThan("large")`
      max-width: 101.25rem;
      width: 100%;
  `}
`

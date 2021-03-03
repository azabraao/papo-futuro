import styled from "styled-components"
import media from "styled-media-query"

export const SupportersWrapper = styled.div`
margin:  0 auto;
max-width: 900px;

  .Supporters__logo {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;

    .Supporters__logo-img {
      max-width: 48%;

      ${media.greaterThan("large")`
        max-width: 20%;
      `}
    }
  }
`

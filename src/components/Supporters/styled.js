import styled from "styled-components"
import media from "styled-media-query"

export const SupportersWrapper = styled.div`
  margin: 0 auto;
  max-width: 1100px;

  header {
    p {
      margin-bottom: 8px;
      text-align: center;
      color: var(--dark);


      ${media.greaterThan("large")`
        font-size: 18px;
        line-height: 1.1;
        margin-bottom: 24px;
      `}
    }
  }

  .Supporters__logo {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;

    .Supporters__logo-row {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }

    .Supporters__logo-img {
      max-width: 48%;
      margin: 8px;

      ${media.greaterThan("large")`
        max-width: 20%;
      `}
    }
  }
`

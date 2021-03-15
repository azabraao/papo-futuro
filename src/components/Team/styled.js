import styled from "styled-components"
import media from "styled-media-query"

export const MakersWrapper = styled.div`
  margin: 0 auto;
  max-width: 900px;

  .Makers__list {

  }
`

export const CardWrapper = styled.div`
  width: 200px;
  padding: 16px;

  .Card__img {
    margin-bottom: 8px;

    img {
      border-radius: 24px;
    }

    ${media.greaterThan("large")`
      margin-bottom: 16px;

      .gatsby-image-wrapper {
        width: 200px !important;
        height: 200px !important;
      } 
    `}
  }
  .Card__title {
    h3 {
      font-weight: bold;
      color: var(--primary);
      margin-bottom: 8px;
      font-size: 14px;
    }
  }
  .Card__description {
    color: var(--danger);

    .Card__description-info {
      display: inline-block;
      margin-right: 16px;
    }
  }
`
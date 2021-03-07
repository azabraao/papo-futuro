import styled from "styled-components"
import media from "styled-media-query"

export const PublicSchoolSectionWrapper = styled.section`
  padding: 40px 0;

  h2 {
    font-weight: 700;
    margin-bottom: 16px;
    font-size: 28px;
    line-height: 1.3;
    max-width: 800px;

    ${media.greaterThan("large")`
        font-size: 30px;
        margin-bottom:32px;
     `}
  }

  article {
    margin-bottom: 40px;

    ${media.greaterThan("large")`
      display: flex;
      justify-content: space-between;
      margin-bottom: 16px;
     `}

    p {
      display: block;
      margin-bottom: 8px;
      line-height: 1.4;
      font-size: 19px;

      ${media.greaterThan("large")`
        width: 48%
      `}

      strong {
        font-weight: 700;
      }
    }
  }

  .PublicSchoolSection__buttons {
    ${media.greaterThan("large")`
      display: flex;
      justify-content: space-between
     `}

    .PublicSchoolSection__button-1,
    .PublicSchoolSection__button-2 {
      padding: 16px;
      text-decoration: none;
      display: inline-block;
      text-transform: uppercase;
      border-radius: 50px;
      font-weight: 700;
      width: 100%;
      text-align: center;

      ${media.greaterThan("large")`
        width: auto
      `}
    }
    .PublicSchoolSection__button-1 {
      border: 2px solid;
      color: var(--primary);
      border-color: var(--primary);
      margin-bottom: 16px;
    }
    .PublicSchoolSection__button-2 {
      background-color: var(--warning);
      color: var(--white);
    }
    .PublicSchoolSection__button-1-wrap,
    .PublicSchoolSection__button-2-wrap {
      ${media.greaterThan("large")`
        width: 48%
      `}
    }
  }

  ${media.greaterThan("large")`

  `}
`

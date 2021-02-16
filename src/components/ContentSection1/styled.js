import styled from "styled-components"
import media from "styled-media-query"

export const ContentSection1Wrapper = styled.section`
  padding: 80px 0 70px;

  article {
    ${media.greaterThan("large")`
        max-width: 50%
    `}

    h2 {
      position: relative;

      font-size: 22px;
      font-weight: 700;
      margin-bottom: 16px;

      &::before {
        content: "";
        position: absolute;
        background-color: var(--primary-lighter);
        top: -15px;
        display: block;
        height: 6px;
        width: 40px;
        border-radius: 8px;
      }

      ${media.greaterThan("large")`
        font-size: 47px;
      `}
    }
    p {
      display: block;
      margin-bottom: 8px;
      line-height: 1.4;
      font-size: 19px;

      strong {
        font-weight: 700;
      }
    }
    a {
      margin-top: 24px;
      display: flex;
      text-decoration: none;
      font-size: 13px;
      text-transform: uppercase;
      align-items: center;
      font-weight: 700;
      line-height: 1.4;
      font-size: 19px;

      svg {
        width: 16px;
        margin-right: 12px;
      }
    }
  }

  .SideImage {
    width: 50%;
    height: 433px;
  }

  .ContentSection1Wrapper__inner {
    display: flex;
    align-items: center;
  }
`

import styled from "styled-components"
import media from "styled-media-query"

export const FooterWrapper = styled.div`
  .Footer__top {
    padding: 24px 0;
    border-top: 1px solid #ebebeb;
    border-bottom: 1px solid #ebebeb;

    ${media.greaterThan("large")`
      padding-top: 60px;
    `}

    .Footer__inside {
      ${media.greaterThan("large")`
        display: flex;
        align-items: center;
        justify-content: space-between;
      `}

      .Footer__logo {
        display: flex;
        justify-content: center;
        margin-bottom: 32px;
      }
      .Footer__links {
        text-align: center;
        margin-bottom: 24px;

        ${media.greaterThan("large")`
          display: flex;
        `}

        .Footer__links-column {
          display: inline;
          margin-right: 120px;

          ${media.greaterThan("large")`
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
          `}
        }

        .Footer__link {
          text-decoration: none;
          margin: 12px;
          display: inline-block;
        }
      }
      .Footer__social {
        display: flex;
        justify-content: center;
        align-items: center;

        ${media.greaterThan("large")`
          width: 390px;
          justify-content: space-around;
        `}

        a {
          display: inline-block;
          margin: 8px 12px;
        }
      }
    }
  }
  .Footer__desktop-column {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 190px;

    .Footer__desktop-column-img {
    }
  }
  .Footer__bottom {
    text-align: center;
    color: #aeaeae;
    padding: 32px 0 50px 0;
    font-size: 13px;
    line-height: 1.4;
  }
`

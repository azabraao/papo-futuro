import styled from "styled-components"
import media from "styled-media-query"

export const SiteHeaderWrapper = styled.div`
  .SiteHeader {
    z-index: 1;
  }
  .SiteHeader__titles {
    margin-top: 260px;
    margin-bottom: 24px;

    ${media.greaterThan("large")`
      margin-top: 300px; 
    `}

    h1 {
      font-weight: 700;
      line-height: 1.5;
      font-size: 1.7rem;
      color: var(--white);
    }

    h2 {
      color: var(--white);
      font-size: 0.9rem;
    }
  }

  .SiteHeader__buttons {
    padding-bottom: 40px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    ${media.greaterThan("large")`
      padding-bottom: 120px;
    `}

    .SiteHeader__button-1 {
      color: var(--white);
      text-decoration: none;
      display: flex;
      align-items: center;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 0.8rem;
      margin-bottom: 16px;
      margin-right: 24px;

      ${media.greaterThan("large")`
      margin-right: 40px;
    `}

      div {
        background: var(--white);
        border-radius: 50%;
        height: 40px;
        width: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 16px;
        svg {
          width: 18px;
        }
      }
    }
    .SiteHeader__button-2 {
      font-weight: 700;
      color: var(--white);
      background: var(--warning);
      padding: 16px;
      border-radius: 32px;
      text-decoration: none;
      text-transform: uppercase;
      font-size: 0.8rem;
      display: inline-block;
      margin-bottom: 16px;
    }
  }
`

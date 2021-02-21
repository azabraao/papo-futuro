import styled from "styled-components"
import media from "styled-media-query"

export const HowMuchCostsWrapper = styled.div`
  margin-bottom: 80px;

  .HowMuchCosts__squares {
    display: flex;
    flex-wrap: wrap;
    max-width: 900px;
    margin: 0 auto;

    ${media.greaterThan("large")`
        box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
      `}

    .HowMuchCosts__square {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 20px;

      ${media.greaterThan("large")`
        width: calc(100%/4)  
      `}

      h2 {
        color: var(--warning);
        text-transform: uppercase;
        position: relative;
        line-height: 1.5;
        margin-top: 16px;

        &::before {
          content: "";
          display: block;
          top: -10px;
          background: var(--primary);
          width: 30px;
          height: 4px;
          position: absolute;
        }
      }
      svg {
        margin-bottom: 16px;
      }

      p {
        text-transform: uppercase;
        margin-bottom: 8px;
      }
      div {
        font-size: 28px;
        font-weight: 700;
        small {
          font-size: 12px;
        }
      }
      &.HowMuchCosts__square-1 {
      }
      &.HowMuchCosts__square-2 {
        background: #fafafa 0% 0% no-repeat padding-box;
      }
      &.HowMuchCosts__square-3 {
        background: #f5f5f5 0% 0% no-repeat padding-box;
      }
      &.HowMuchCosts__square-4 {
        background: #fafafa 0% 0% no-repeat padding-box;
      }
    }
  }
`

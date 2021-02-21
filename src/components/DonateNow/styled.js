import styled from "styled-components"
import media from "styled-media-query"

export const DonateNowWrapper = styled.section`
  .DonateNow__inside {
    ${media.greaterThan("large")`
    display: flex;
    justify-content: space-between;
    align-items: stretch;
  `}

    .DonateNow__column {
      &.DonateNow__column-donate {
        padding: 80px 0;

        ${media.greaterThan("large")`
          width: 40%;
        `}

        h2 {
          position: relative;
          text-align: center;
          color: var(--white);
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 24px;

          &::before {
            content: "";
            position: absolute;
            margin: 0 auto;
            text-align: center;
            background-color: var(--white);
            width: 24px;
            height: 4px;
            position: absolute;
            left: 0;
            right: 0;
            top: -16px;
          }
        }

        .DonateNow__buttons {
          .DonateNow__button {
            padding: 16px;
            text-transform: uppercase;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 16px;
            width: 100%;
            margin-bottom: 24px;
            border: none;
            font-size: 14px;
            background: var(--white);
            color: var(--danger);
            font-weight: 700;
            text-decoration: none;
            cursor: pointer;

            &.DonateNow__button-1 {
              background: var(--danger);
              color: var(--white);
            }
            &.DonateNow__button-2 {
            }
            &.DonateNow__button-3 {
            }
          }
        }
      }
      &.DonateNow__column-nubia {
        height: 300px;
        position: relative;

        ${media.greaterThan("large")`
            width: 46%;
            height: 430px;
        `}

        article {
          position: absolute;
          bottom: 30px;

          p {
            color: var(--white);
            font-weight: bold;
            text-transform: uppercase;
          }
          small {
            color: var(--warning);
          }
        }
      }
    }
  }
`

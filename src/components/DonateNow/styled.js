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
        padding: 50px 0;

        ${media.greaterThan("large")`
          padding: 80px 0;
          width: 40%;
        `}

        h2 {
          position: relative;
          text-align: center;
          color: var(--white);
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 24px;

          ${media.greaterThan("large")`
            text-align: left;
            font-size: 38px;
            padding-left: 28px;
          `}

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
            top: 0;

            ${media.greaterThan("large")`
              margin-left: 0;
              top: -5px;
              width: 50px;
              height: 6px;
              border-radius: 8px;
              left: 28px;
            `}
          }
        }

        .DonateNow__buttons {

          ${media.greaterThan("large")`
            max-width: 370px;
          `}

          .DonateNow__button {
            padding: 16px;
            text-transform: uppercase;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 16px;
            width: 100%;
            border: none;
            font-size: 14px;
            background: var(--white);
            color: var(--danger);
            font-weight: 700;
            text-decoration: none;
            cursor: pointer;

            &:not(:last-child) {
              margin-bottom: 24px;
            }

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
            margin-bottom: 0;
          }
          small {
            color: var(--warning);
          }
        }
      }
    }
  }
`

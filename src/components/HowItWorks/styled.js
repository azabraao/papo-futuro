import styled from "styled-components"
import media from "styled-media-query"

export const HowItWorksWrapper = styled.div`
  .HowItWorks__header {
    ${media.greaterThan("large")`
      text-align: center;
      max-width: 50%;
      margin: 0 auto; 
    `}
  }
  .HowItWorks__steps {
    ${media.greaterThan("large")`
      display: flex;
    `}

    .HowItWorks__step {
      display: flex;
      align-items: center;
      padding: 40px 0 24px;

      ${media.greaterThan("large")`
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 25%;
        padding: 0 60px;
        align-items: flex-start;
        justify-content: flex-start;
      `}

      &:not(:last-child) {
        border-bottom: 2px solid var(--black);
        position: relative;

        ${media.greaterThan("large")`
          border-bottom: 0;
          border-right: 2px solid var(--black);
        `}

        &::before {
          background-image: url(/assets/img/arrow.svg);
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          margin: 0 auto;
          width: 27px;
          height: 51px;
          background-size: contain;
          bottom: -39px;
          transform: rotate(90deg);
          z-index: -1;

          ${media.greaterThan("large")`
              left: unset;
              right: -26px;
              margin: 0 auto;
              width: 26px;
              bottom: unset;
              transform: rotate(0);
              top: 0;
              bottom: 0;
              margin: auto;
            }
          `}
        }
        &::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          width: 20px;
          height: 20px;
          background: var(--white);
          margin: 0 auto;
          bottom: -7px;
          transform: rotate(45deg);

          ${media.greaterThan("large")`
              left: unset;
              right: -7px;
              bottom: unset;
              transform: rotate(45deg);
            }
          `}
        }
      }

      .HowItWorks__step-number {
        font-size: 60px;
        color: var(--primary);
        font-weight: 700;
        margin-right: 16px;

        ${media.greaterThan("large")`
          align-self: flex-end;
          font-size: 132px;
          margin-right: 0;
          margin-bottom: 24px;
        `}
      }
      .HowItWorks__step-text {
        color: var(--dark);
        line-height: 1.4;

        ${media.greaterThan("large")`
          margin-bottom: 24px;
        `}
        p {
        }
      }
      svg {
        align-self: center;
        margin-top: auto;
      }
    }
  }
`

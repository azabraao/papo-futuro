import styled from "styled-components"
import media from "styled-media-query"

export const AchievementsWrapper = styled.div`
  background-color: ${props => (props.background ? props.background : "")};

  .Achievements__inner {
    &.Achievements__columns {
      ${media.greaterThan("large")`
        display: flex;
        align-items:center;

        .Achievements__column {
          width: 50%;
          position: relative;
          height: 290px;

            .Achievements__desktopImage {
              position: absolute !important;
              top: -140px;
              right: 100px;
              width: 500px;
              height: 500px;
            }
          }
        }
      `}
    }

    .Achievements__cards {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .Card {
        width: 48%;
        padding: 16px;
        display: flex;
        flex-direction: column;
        background: #f2f2f2;
        border-radius: 16px;

        .ant-progress {
          display: flex;
          justify-content: center;
          margin: 16px 0;
        }

        .ant-progress-text {
          color: #f2f2f2;

          &::before {
            content: "";
            left: 0;
            right: 0;
            bottom: 0;
            top: 0;
            margin: auto;
            position: absolute;
            width: 40px;
            height: 49px;
            background-position: center center;
            background-size: contain;
            background-repeat: no-repeat;
            z-index: 1;
          }
        }

        &.Card--valor {
          .ant-progress-inner {
            path {
              stroke: var(--primary);
            }
          }
          .ant-progress-text {
            &::before {
              background-image: url(/assets/img/meta-valor.svg);
            }
          }

          .Card__target {
          }
        }
        &.Card--alunos {
          .ant-progress-inner {
            path {
              stroke: var(--danger);
            }
          }
          .ant-progress-text {
            &::before {
              background-image: url(/assets/img/meta-alunos.svg);
            }
          }
          .Card__target {
          }
        }

        .Card__title {
          text-transform: uppercase;
          font-weight: bold;
          margin-bottom: 8px;
          color: var(--dark);
          text-align: center;
          font-size: 14px;
        }
        .Card__subtitle {
          text-transform: uppercase;
          margin-bottom: 8px;
          text-align: center;
          font-size: 22px;
        }
        .Card__target-text {
          text-transform: uppercase;
          margin-bottom: 8px;
          color: var(--dark);
          text-align: center;
          font-size: 14px;
        }
        .Card__target {
          text-transform: uppercase;
          font-weight: bold;
          text-align: center;
          font-size: 22px;
        }
      }
    }
  }
`

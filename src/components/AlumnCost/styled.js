import styled from "styled-components"
import media from "styled-media-query"

export const AlumnCostWrapper = styled.div`
  padding: 80px 0;

  ${media.greaterThan("large")`
   display: flex;
    justify-content: space-between;
  `}

  .AlumnCost__img {
    margin-bottom: 8px;

    ${media.greaterThan("large")`
      width: 50%;
    `}

    .AlumnCost__img-wrap {
      max-width: 400px;
      margin: 0 auto;
      img {
      }
    }
  }

  .AlumnCost__content {
    display: flex;
    align-items: center;
    margin: 24px 0;
    text-align: center;

    ${media.greaterThan("large")`
      flex-direction: column;
      width: 50%;
      justify-content: space-around;
      align-items:flex-end;
    `}

    .AlumnCost__content-box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-weight: 700;
      padding: 16px;
      background: #f5f5f5 0% 0% no-repeat padding-box;
      width: 50%;

      ${media.greaterThan("large")`
        flex-direction: row;
        width: 80%;
        justify-content:flex-start;
        border-radius: 16px;
        padding: 32px;
        font-size: 24px;line-height: 1.2;
      `}

      article {
        padding-bottom: 8px;
        text-transform: uppercase;

        ${media.greaterThan("large")`text-align:left;
         width: 40%;   
         padding-bottom: 0;   
        `}

        p {
        }
      }

      div {
        display: flex;
        flex-direction: column;
        p {
          font-size: 28px;
        }
        small {
        }

        ${media.greaterThan("large")`
          color: var(--warning);
          font-size: 30px;
          margin-left: 28px;

          p {
            font-size: 42px;
          }
        `}
      }
      &.AlumnCost__content-box-1 {
        ${media.lessThan("large")`
          background-color: #fafafa;
        `}

        div {
          color: var(--warning);
        }
      }
      &.AlumnCost__content-box-2 {
        ${media.lessThan("large")`
            background-color: #fcfcfc;
          `}

        div {
          color: var(--primary);
        }

        ${media.greaterThan("large")`
          
          div {
            color: var(--warning)
          }
        `};
      }
    }
  }
`

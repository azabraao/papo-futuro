import styled from "styled-components"
import media from "styled-media-query"

export const StudentCostWrapper = styled.div`
  padding: 16px 0;

  ${media.greaterThan("large")`
  padding: 80px 0;
   display: flex;
    justify-content: space-between;
  `}

  .StudentCost__img {
    margin-bottom: 8px;

    ${media.greaterThan("large")`
      width: 50%;
    `}

    .StudentCost__img-wrap {
      max-width: 400px;
      margin: 0 auto;
      img {
      }
    }
  }

  .StudentCost__content {
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

    .StudentCost__content-box {
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
        width: 90%;
        justify-content:flex-start;
        padding: 40px;
        font-size: 24px;
        line-height: 1.3;
        padding-left: 80px;


        &:last-child {
          margin-top: 40px;
        }

      `}

      article {
        padding-bottom: 8px;
        text-transform: uppercase;

        ${media.greaterThan("large")`text-align:left;
         width: 40%;   
         padding-bottom: 0;   
        `}

        p {
          margin-bottom: 0;
        }
      }

      div {
        display: flex;
        flex-direction: column;
        p {
          font-size: 35px;
          font-weight: bold;
          margin-bottom: 0;
          letter-spacing: -1px;
          line-height: 1;
        }
        small {
          font-size: 22px;
        }

        ${media.greaterThan("large")`
          color: var(--warning);
          font-size: 30px;
          margin-left: 28px;

          p {
            font-size: 43px;
          }
          small {
            font-size: 33px;
          }
        `}
      }
      &.StudentCost__content-box-1 {
        ${media.lessThan("large")`
          background-color: #fafafa;
        `}

        div {
          color: var(--warning);
        }
      }
      &.StudentCost__content-box-2 {
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

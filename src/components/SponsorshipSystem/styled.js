import styled from "styled-components"
import media from "styled-media-query"

export const SponsorshipSystemWrapper = styled.div`
  line-height: 1.2;

  header {
    margin-bottom: 16px;

    p {
      margin-bottom: 0;
    
    ${media.greaterThan("large")`
      line-height: 1.3;
      font-size: 18px;
    `}
    }

    ${media.greaterThan("large")`
      text-align: center;
      margin-bottom: 32px;
    `}
  }
  .SponsorshipSystem__columns {
    
    .SponsorshipSystem__columns-cover {
        ${media.greaterThan("large")`
          
          .SponsorshipSystem__columns-cover-inner {
            height: 250px;
            display: flex;
            justify-content: space-between;
            align-items: stretch;

            .SponsorshipSystem__bg {
              width: 50%;
              text-align: left;
              display: flex;
              align-items: center;
              font-size: 24px;
              color: var(--white);
              font-weight: 700;

              &-1 {
              
              }
              
              &-2 {
                padding-left: 24px;
              }
            }

          }
      }
    `}

    .SponsorshipSystem__columns-inner {
      display: flex;
      justify-content: space-between;

      .SponsorshipSystem__column {
        width: 48%;
      }
    }

    .SponsorshipSystem__column {
      color: var(--dark);
      line-height: 1.4;
      font-size: 18px;

      .SponsorshipSystem__column-img {
        height: 100px;
        display: flex;
        align-items: center;
        color: var(--white);
        font-weight: 700;
        font-size: 18px;
      }
      p {
        margin: 24px 0;
      }
    }
  }

  ${media.greaterThan("large")`

  `}
`

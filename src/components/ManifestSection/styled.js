import styled from "styled-components"
import media from "styled-media-query"

export const ManifestSectionWrapper = styled.div`
  .ManifestSectionWrapper__image {
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;

    ${media.greaterThan("large")`
        height: 400px
    `}

    .ManifestSectionWrapper__click-area {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;

      ${media.greaterThan("large")`
        width: 50%;
        margin-left: auto
      `}

      .ManifestSectionWrapper__click-area-inside {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        text-transform: uppercase;
        color: var(--danger);
        text-align: center;
        svg {
          margin-bottom: 16px;
        }
      }
    }
  }
`

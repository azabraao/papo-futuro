import styled from "styled-components"
import media from "styled-media-query"

export const PapoNaMidiaWrapper = styled.div`
  .slick-slide {
    opacity: 0.5;

    ${media.greaterThan("large")`
      opacity: 1;
    `}
  }

  .slick-center {
    opacity: 1;
  }
`

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 320px;
  margin: 0 auto;
  padding: 0 16px;

  ${media.greaterThan("large")`
      max-width: 480px;
  `}

  .Card__img {
    margin-bottom: 16px;
    width: 100%;

    ${media.greaterThan("large")`
      margin-bottom: 32px;
    `}
  }

  .Card__preTitle {
    margin-bottom: 8px;
    a {
      text-decoration: none;
      color: var(--warning);
      text-transform: uppercase;
      font-size: 13px;
    }
  }

  .Card__title {
    a {
      h3 {
        color: var(--primary);
        line-height: 1.3;

        ${media.greaterThan("large")`
          font-size: 28px;
          margin-bottom: 0px;
        `}
      }
    }
    margin-bottom: 16px;
  }

  .Card__description {
    color: var(--dark);
    line-height: 1.4;
    font-size: 13px;

    ${media.greaterThan("large")`
      font-size: 16px;
    `}

    .Card__description-link {
      text-transform: uppercase;
      color: var(--warning);
      font-weight: bold;
    }
  }
`

export const SlideArrow = styled.div`
  display: flex;
  height: 100%;
  position: absolute;
  align-items: center;
  right: ${props => (props.isLeft ? "auto" : "10px")};
  left: ${props => (props.isLeft ? "10px" : "auto")};
  top: 0;
  z-index: 1;
  cursor: pointer;

  path {
    fill: ${props => (props.active ? "var(--danger)" : "var(--dark)")};
  }
`

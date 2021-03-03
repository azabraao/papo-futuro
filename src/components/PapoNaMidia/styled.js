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

  .Card__img {
    margin-bottom: 32px;
    height: 125px;
    width: 100%;
  }

  .Card__preTitle {
    margin-bottom: 8px;
    a {
      text-decoration: none;
      color: var(--danger);
      text-transform: uppercase;
      font-size: 13px;
    }
  }

  .Card__title {
    a {
      h3 {
        color: var(--primary);
        line-height: 1.3;
      }
    }
    margin-bottom: 16px;
  }

  .Card__description {
    color: var(--dark);
    line-height: 1.3;
    font-size: 13px;

    .Card__description-link {
      text-transform: uppercase;
      color: var(--danger);
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

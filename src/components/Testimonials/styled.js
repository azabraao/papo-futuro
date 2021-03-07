import styled from "styled-components"
import media from "styled-media-query"

export const TestimonialsWrapper = styled.div`

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
  max-width: 230px;
  margin: 0 auto;

  .Card__img {
    margin-bottom: 32px;
  }

  .Card__name {
    font-weight: bold;
    color: var(--danger);
  }

  .Card__title {
    color: var(--danger);
    margin-bottom: 16px;
  }

  .Card__description {
    color: var(--dark);
    line-height: 1.3;
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

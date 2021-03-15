import styled from "styled-components"
import media from "styled-media-query"

export const TestimonialsWrapper = styled.div`
  .slick-slide {
    opacity: 0.5;

    ${media.greaterThan("medium")`
      opacity: 1;
    `}
  }

  .slick-center {
    opacity: 1;
  }


  header {
    p {
      margin-bottom: 8px;
      text-align: center;
      color: var(--dark);


      ${media.greaterThan("large")`
        font-size: 18px;
        line-height: 1.1;
        margin-bottom: 24px;
      `}
    }
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
    h3 {
      color: var(--danger);
      font-weight: bold;
      margin-bottom: 0;
    }
  }

  .Card__title {
    h3 {
      color: var(--danger);
      margin-bottom: 0;
    }

    margin-bottom: 4px;

    ${media.greaterThan("large")`
      margin-bottom: 16px;
    `}
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
  z-index: 0;
  cursor: pointer;

  path {
    fill: ${props => (props.active ? "var(--danger)" : "var(--dark)")};
  }
`

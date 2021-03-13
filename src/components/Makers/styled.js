import styled from "styled-components"
import media from "styled-media-query"

export const MakersWrapper = styled.div`
  margin: 0 auto;
  max-width: 900px;

  .Makers__list {
    ${media.greaterThan("large")`
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    `}
  }
`

export const CardWrapper = styled.div`
  width: 200px;
  padding: 16px;

  .Card__img {
    margin-bottom: 8px;

    img {
      border-radius: 24px;
    }

    ${media.greaterThan("large")`
      margin-bottom: 16px;
    `}
  }
  .Card__title {
    h3 {
      font-weight: bold;
      color: var(--primary);
      margin-bottom: 8px;
      font-size: 14px;
    }
  }
  .Card__description {
    color: var(--danger);

    .Card__description-info {
      display: inline-block;
      margin-right: 16px;
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
  z-index: 0;
  cursor: pointer;

  path {
    fill: ${props => (props.active ? "var(--danger)" : "var(--dark)")};
  }
`

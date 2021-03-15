import styled from "styled-components"
import media from "styled-media-query"

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

  ${media.greaterThan("large")`
    right: ${props => (props.isLeft ? "auto" : "-40px")};
    left: ${props => (props.isLeft ? "-40px" : "auto")};
  `}

  path {
    fill: ${props => (props.active ? "var(--danger)" : "var(--dark)")};
  }
`

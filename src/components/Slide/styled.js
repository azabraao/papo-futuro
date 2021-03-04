import styled from "styled-components"

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

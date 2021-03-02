import styled from "styled-components"
import media from "styled-media-query"

export const TitleWrapper = styled.h2`
  position: relative;
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 16px;
  color: var(--${props => props.titleColor});
  text-align: center;
  margin-bottom: 40px;

  &::before {
    content: "";
    position: absolute;
    background-color: var(--${props => props.lineColor});
    top: -15px;
    display: block;
    height: 6px;
    width: 40px;
    border-radius: 8px;
    margin: ${props => props.centeredOnMobile && "0 auto"};
    left: ${props => props.centeredOnMobile && "0"};
    right: ${props => props.centeredOnMobile && "0"};

    ${media.greaterThan("large")`
      left: 0;
      right: 0;
      margin: 0 auto; 
    `}
  }

  ${media.greaterThan("large")`
    font-size: 47px;
  `}
`

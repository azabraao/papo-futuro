import styled from "styled-components"
import media from "styled-media-query"

export const SectionWrapper = styled.section`
  padding: 60px 0;
  background-color: ${props => (props.background ? props.background : "")};

  ${media.greaterThan("large")`
    padding: 80px 0;
  `};
`

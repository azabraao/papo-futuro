import styled from "styled-components"
import media from "styled-media-query"

export const HelpedStudentsWrapper = styled.div`
  .HelpedStudents {
    height: 200px;
    line-height: 1.3;
    color: var(--white);
    font-size: 18px;
    display: flex;
    align-items: center;

    p:not(:last-child) {
      margin-bottom: 8px;
    }
    ${media.greaterThan("large")`
      font-size: 30px;
      height: 400px;
    `}
  }
  .HelpedStudents__inside {

    p {
      margin-bottom: 0;
    }
  }
`

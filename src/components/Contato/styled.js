import styled from "styled-components"
import media from "styled-media-query"

export const ContatoWrapper = styled.div`
  .Contato__description {
    line-height: 1.4;
    text-align: center;
    margin: 0 auto 32px auto;
    max-width: 800px;
color: var(--dark);

    ${media.greaterThan("large")`
font-size: 18px
      `}

    strong {
      font-weight: bold;
    }
  }

  .Contato__links {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto 32px auto;
    max-width: 1000px;

    ${media.greaterThan("large")`
      flex-direction: row;
      justify-content: flex-start;
      flex-wrap: wrap;
      align-items: flex-start;
    `}

    .Contato__link {
      margin-bottom: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 16px;
      border-radius: 40px;
      text-transform: uppercase;
      color: var(--white);
      text-align: center;
      width: 300px;
      background: var(--primary);
      text-decoration: none;
      
      p {
        margin-bottom: 0;
      }

      ${media.greaterThan("large")`
        margin: 16px;
        height: 60px;
      `}
      svg {
        margin-right: 8px;
      }

      &.whatsapp {
        background-color: var(--success);
      }
      &.sou-aluno {
        border: 2px solid var(--primary);
        color: var(--primary);
        background-color: var(--white);
      }
    }
  }

  .Contato__bottomImage {
    margin-top: 32px;
    max-width: 98%;
    margin: 0 auto;

    ${media.greaterThan("large")`
      max-width: 800px;
    `}
  }
`

import React, { memo, useEffect, useState } from "react"
import Container from "../Container"
import SideImage from "./SideImage"
import * as S from "./styled"

const ContentSection1 = () => {
  const [shouldRenderImage, setShouldRenderImage] = useState(false)

  useEffect(() => {
    setShouldRenderImage(window.innerWidth >= 1170)
  }, [])

  return (
    <S.ContentSection1Wrapper id="o-projeto">
      <Container>
        <div className="ContentSection1Wrapper__inner">
          <article>
            <h2 className="color-primary">
              Por que acreditamos que só a
              <span className="color-warning"> educação </span>é capaz de
              transformar a realidade das pessoas?
            </h2>
            <p>
              <span className="color-dark">
                Devido à pandemia, as escolas foram fechadas e os alunos tiveram
                que se adaptar a uma nova realidade: o 
                <strong>Ensino a Distância</strong>.
              </span>
            </p>
            <p>
              <strong className="color-primary">
                Mas como superar esse desafio em um país onde 6,6 milhões de
                estudantes não têm acesso à internet?
              </strong>
            </p>
            <a href="#manifesto" className="color-warning">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23.237"
                height="26.737"
                viewBox="0 0 23.237 26.737"
              >
                <path
                  id="noun_Arrow_Left_2682937"
                  data-name="noun_Arrow Left_2682937"
                  d="M11.616,23.237,1.93,13.543,0,11.612l1.93-1.93L11.616,0l1.93,1.926L5.226,10.247H26.737v2.73H5.226L13.547,21.3Z"
                  transform="translate(0 26.737) rotate(-90)"
                  fill="#ffb133"
                />
              </svg>
              Saiba como
            </a>
          </article>
          {shouldRenderImage && <SideImage />}
        </div>
      </Container>
    </S.ContentSection1Wrapper>
  )
}

export default memo(ContentSection1)

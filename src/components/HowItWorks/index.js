import React, { memo, useEffect, useState } from "react"
import * as S from "./styled"
import Container from "../Container"
import Computer from "./Computer"
import Lupa from "./Lupa"
import Phone from "./Phone"
import Alvo from "./Alvo"
import Section from "../Section"
import Title from "../Title"

const HowItWorks = () => {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 1170)
  }, [])

  return (
    <Section id="como-funciona">
      <S.HowItWorksWrapper className="HowItWorks">
        <Container>
          <header className="HowItWorks__header">
            <Title lineColor="primary" titleColor="primary">
              Como funciona a seleção dos alunos
            </Title>
          </header>
          <div className="HowItWorks__steps">
            <div className="HowItWorks__step">
              <div className="HowItWorks__step-number">1</div>
              <div className="HowItWorks__step-text">
                <p>
                  Chegamos nos alunos por meio de cursinhos populares e líderes
                  de comunidades
                </p>
              </div>
              {isDesktop && <Lupa />}
            </div>
            <div className="HowItWorks__step">
              <div className="HowItWorks__step-number">2</div>
              <div className="HowItWorks__step-text">
                <p>
                  Selecionamos os alunos com maior engajamento com educação por
                  meio de entrevistas e suas respostas no nosso formulário{" "}
                </p>
              </div>
              {isDesktop && <Alvo />}
            </div>
            <div className="HowItWorks__step">
              <div className="HowItWorks__step-number">3</div>
              <div className="HowItWorks__step-text">
                <p>
                  Doamos dispositivos eletrônicos e chips de 4G de 20 GB
                  possibilitando com que os alunos assistam pelo menos três
                  horas de vídeo aulas por dia{" "}
                </p>
              </div>
              {isDesktop && <Phone />}
            </div>
            <div className="HowItWorks__step">
              <div className="HowItWorks__step-number">4</div>
              <div className="HowItWorks__step-text">
                <p>
                  Auxiliamos os alunos com um processo de acompanhamento.
                  Atualmente todos os alunos que querem, conseguem uma bolsa de
                  100% na plataforma Me Salva
                </p>
              </div>
              {isDesktop && <Computer />}
            </div>
          </div>
        </Container>
      </S.HowItWorksWrapper>
    </Section>
  )
}

export default memo(HowItWorks)

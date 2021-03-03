import React, { memo, useEffect, useState } from "react"
import * as S from "./styled"
import Section from "../Section"
import Container from "../Container"
import Title from "../Title"
import Slide from "./Slide"

const PapoNaMidia = () => {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 1170)
  }, [])

  return (
    <Section>
      <S.PapoNaMidiaWrapper>
        <Container>
          <Title
            lineColor="danger-dark"
            centeredOnMobile={true}
            titleColor="danger"
          >
            papo na mídia
          </Title>
          {isDesktop && <Slide />}
        </Container>
        {!isDesktop && <Slide />}
      </S.PapoNaMidiaWrapper>
    </Section>
  )
}

export default memo(PapoNaMidia)

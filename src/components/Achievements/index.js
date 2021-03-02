import React, { memo, useEffect, useState } from "react"
import { AchievementsWrapper } from "./styled"
import Section from "../Section"
import Title from "../Title"
import DesktopImage from "./DesktopImage"
import Container from "../Container"
import "antd/dist/antd.css"
import { Progress } from "antd"

const Achievements = () => {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 1170)
  }, [])

  return (
    <Section>
      <Container>
        <AchievementsWrapper>
          <Title
            lineColor="primary-lighter"
            titleColor="primary"
            centeredOnMobile={true}
          >
            nossas conquistas
          </Title>
          <div className="Achievements__inner Achievements__columns">
            <div className="Achievements__column">
              {isDesktop && <DesktopImage />}
            </div>
            <div className="Achievements__cards Achievements__column">
              <div className="Card Card--valor">
                <div className="Card__title">Valor arrecadado</div>
                <div className="Card__subtitle color-primary">R$ 40.123,00</div>
                <Progress type="circle" percent={75} trailColor="#fff" />
                <div className="Card__target-text">Nossa meta é</div>
                <div className="Card__target color-primary">R$ 100.000,00</div>
              </div>
              <div className="Card Card--alunos">
                <div className="Card__title">alunos ajudados</div>
                <div className="Card__subtitle color-warning">90</div>
                <Progress type="circle" percent={75} trailColor="#fff" />
                <div className="Card__target-text">Nossa meta é</div>
                <div className="Card__target color-warning">120 alunos</div>
              </div>
            </div>
          </div>
        </AchievementsWrapper>
      </Container>
    </Section>
  )
}

export default memo(Achievements)

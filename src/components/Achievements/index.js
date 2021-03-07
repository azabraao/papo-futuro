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
  const [metaAlunos, setMetaAluno] = useState(0)
  const [alunosAjudados, setAlunosAjudados] = useState(0)
  const [metaArrecadacao, setMetaArrecadacao] = useState(0)
  const [valorArrecadado, setValorArrecadado] = useState(0)

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 1170)

    const fetchSheetsApi = async () => {
      try {
        const response = await fetch("http://papofuturo.com.br/api/get-targets.php")
        const data = await response.json()
        setAlunosAjudados(data.alunos_ajudados)
        setValorArrecadado(data.captacao_total)
        setMetaAluno(data.meta_alunos)
        setMetaArrecadacao(data.meta_captacao)
      } catch (e) {
        return e
      }
    }

    fetchSheetsApi()
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
                <div className="Card__subtitle color-primary">
                  {valorArrecadado}
                </div>
                <Progress type="circle" percent={75} trailColor="#fff" />
                <div className="Card__target-text">Nossa meta é</div>
                <div className="Card__target color-primary">
                  {metaArrecadacao}
                </div>
              </div>
              <div className="Card Card--alunos">
                <div className="Card__title">alunos ajudados</div>
                <div className="Card__subtitle color-warning">
                  {alunosAjudados}
                </div>
                <Progress type="circle" percent={75} trailColor="#fff" />
                <div className="Card__target-text">Nossa meta é</div>
                <div className="Card__target color-warning">
                  {metaAlunos} alunos
                </div>
              </div>
            </div>
          </div>
        </AchievementsWrapper>
      </Container>
    </Section>
  )
}

export default memo(Achievements)

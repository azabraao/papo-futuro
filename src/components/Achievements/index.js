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
  const [percentageCaptacao, setPercentageCaptacao] = useState(0)
  const [percentageAlunos, setPercentageAlunos] = useState(0)

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 1170)

    const handleDataReceived = data => {
      const captacao_total = parseFloat(data.captacao_total.match(/[\d].*/)[0])
      const meta_captacao = parseFloat(data.meta_captacao.match(/[\d].*/)[0])
      const percentageCaptacao = (captacao_total / meta_captacao) * 100

      const meta_alunos = parseFloat(data.meta_alunos)
      const alunos_ajudados = parseFloat(data.alunos_ajudados)
      const percentageAlunos = (alunos_ajudados / meta_alunos) * 100

      setPercentageCaptacao(percentageCaptacao)
      setPercentageAlunos(percentageAlunos)

      setAlunosAjudados(data.alunos_ajudados)
      setValorArrecadado(data.captacao_total)
      setMetaAluno(data.meta_alunos)
      setMetaArrecadacao(data.meta_captacao)
    }

    const fetchSheetsApi = async () => {
      try {
        const response = await fetch(
          "http://papofuturo.com.br/api/get-targets.php"
        )
        const data = await response.json()
        setAlunosAjudados(data.alunos_ajudados)
        setValorArrecadado(data.captacao_total)
        setMetaAluno(data.meta_alunos)
        setMetaArrecadacao(data.meta_captacao)

        handleDataReceived(data)
      } catch (e) {
        const data = {
          meta_alunos: "250",
          meta_captacao: "R$ 100.000,00",
          alunos_ajudados: "212",
          captacao_total: " R$ 80.094,03 ",
        }
        handleDataReceived(data)
      }
    }

    fetchSheetsApi()
  }, [])

  return (
    <Section id="conquistas">
      <Container>
        <AchievementsWrapper>
          <header>
            <Title
              lineColor="primary-lighter"
              titleColor="primary"
              centeredOnMobile={true}
            >
              nossas conquistas
            </Title>
            <p>
              Confira quanto o Papo Futuro já conseguiu arrecadar e quantos
              foram os alunos que já estão sendo apoiados por esta causa.
            </p>
          </header>
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
                <Progress
                  type="circle"
                  percent={percentageCaptacao}
                  trailColor="#fff"
                />
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
                <Progress
                  type="circle"
                  percent={percentageAlunos}
                  trailColor="#fff"
                />
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

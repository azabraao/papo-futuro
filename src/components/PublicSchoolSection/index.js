import React, { memo } from "react"
import Container from "../Container"
import * as S from "./styled"

const PublicSchoolSection = () => {
  return (
    <S.PublicSchoolSectionWrapper>
      <Container>
        <h2 className="color-primary">
          Na Rede Pública de Ensino do Brasil,
          <span className="color-warning"> 39% dos alunos </span>
          não têm um computador ou qualquer outro dispositivo móvel para estudo
          em casa.
        </h2>
        <article>
          <p className="color-dark">
            O <strong>Papo Futuro</strong> auxilia alunos de diferentes
            comunidades a não desistirem de seus sonhos,{" "}
            <strong>
              {" "}
              oferecendo-lhes acesso à internet e também dispositivos
              eletrônicos{" "}
            </strong>{" "}
            para que possam continuar ou voltar a estudar.
          </p>
          <p className="color-dark">
            Para fazer o projeto acontecer apoiar ao maior maior número alunos
            para continuarem, ou retomarem, seus estudos,
            <strong> {" "}
              precisamos de doações financeiras ou em forma de equipamentos como
              laptops e tablets.
            </strong>
          </p>
        </article>
        <div className="PublicSchoolSection__buttons">
          <div className="PublicSchoolSection__button-1-wrap">
            <a href="#depoimentos" className="PublicSchoolSection__button-1">
              Conheça os alunos já ajudados
            </a>
          </div>
          <div className="PublicSchoolSection__button-1-wrap">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://docs.google.com/forms/d/e/1FAIpQLSfX5-FSJ9_CFsbpbl30NP1kloaD8ehwMGvVuHq_LvG5W6AsGA/viewform?usp=send_form"
              className="PublicSchoolSection__button-2"
            >
              veja como doar equipamentos
            </a>
          </div>
        </div>
      </Container>
    </S.PublicSchoolSectionWrapper>
  )
}

export default memo(PublicSchoolSection)

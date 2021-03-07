import React, { memo } from "react"
import Container from "../Container"
import * as S from "./styled"

const PublicSchoolSection = () => {
  return (
    <S.PublicSchoolSectionWrapper>
      <Container>
        <h1 className="color-primary">
          na rede pública do Brasil,
          <span className="color-warning"> 39% dos alunos </span>
          não tem um computador ou tablet em casa.
        </h1>
        <article>
          <p className="color-dark">
            O <strong>Projeto Papo Futuro</strong> ajuda alunos das comunidades
            a não desistirem dos seus sonhos, oferecendo acesso à internet e{" "}
            <strong>fornecendo dispositivos eletrônicos</strong> para que voltem
            a estudar.
          </p>
          <p className="color-dark">
            Para fazer o projeto acontecer e permitir que o maior número de
            alunos retomam aos estudos,{" "}
            <strong>
              precisamos de doações em dinheiro ou em equipamentos como laptops,
              tablets e smartphones.
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

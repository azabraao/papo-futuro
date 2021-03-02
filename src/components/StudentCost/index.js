import React, { memo } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import * as S from "./styled"

const StudentCost = () => {
  const data = useStaticQuery(
    graphql`
      query {
        custoMedioAlunoImg: file(
          relativePath: { eq: "custo-medio-aluno.png" }
        ) {
          childImageSharp {
            fluid(maxWidth: 400, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  const custoMedioAlunoImg = data.custoMedioAlunoImg.childImageSharp.fluid

  return (
    <S.StudentCostWrapper className="StudentCost">
      <picture className="StudentCost__img">
        <div className="StudentCost__img-wrap">
        <Img fluid={custoMedioAlunoImg} />
          </div> 
      </picture>
      <div className="StudentCost__content">
        <div className="StudentCost__content-box StudentCost__content-box-1">
          <article className="color-primary">
            <p>
              Doando <span className="color-warning">R$123,00</span> você ajuda
            </p>
          </article>
          <div>
            <p>123</p>
            <small>alunos</small>
          </div>
        </div>
        <div className="StudentCost__content-box StudentCost__content-box-2">
          <article className="color-warning">
            <p>
              Doando <span className="color-primary">R$321,00</span> você ajuda
            </p>
          </article>
          <div>
            <p>123</p>
            <small>alunos</small>
          </div>
        </div>
      </div>
    </S.StudentCostWrapper>
  )
}

export default memo(StudentCost)

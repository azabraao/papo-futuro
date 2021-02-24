import React, { memo } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import * as S from "./styled"

const AlumnCost = () => {
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
    <S.AlumnCostWrapper className="AlumnCost">
      <picture className="AlumnCost__img">
        <div className="AlumnCost__img-wrap">
        <Img fluid={custoMedioAlunoImg} />
          </div> 
      </picture>
      <div className="AlumnCost__content">
        <div className="AlumnCost__content-box AlumnCost__content-box-1">
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
        <div className="AlumnCost__content-box AlumnCost__content-box-2">
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
    </S.AlumnCostWrapper>
  )
}

export default memo(AlumnCost)

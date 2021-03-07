import React, { memo } from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Container from "../Container"
import Title from "../Title"

const SponsorshipSystem = () => {
  const data = useStaticQuery(
    graphql`
      query {
        padrinhoFinanceiro: file(
          relativePath: { eq: "padrinho-financeiro.png" }
        ) {
          childImageSharp {
            fluid(maxWidth: 400, quality: 70) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        padrinhoPraVida: file(
          relativePath: { eq: "padrinho-para-a-vida.png" }
        ) {
          childImageSharp {
            fluid(maxWidth: 400, quality: 70) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  const padrinhoFinanceiroImg = data.padrinhoFinanceiro.childImageSharp.fluid
  const padrinhoPraVidaImg = data.padrinhoPraVida.childImageSharp.fluid

  return (
    <>
      <Container>
        <header>
          <Title
            titleColor="warning"
            lineColor="warning-dark"
            titleMarginBottom="24px"
          >
            sistema de apadrinhamento
          </Title>
          <p className="color-dark">
            Os alunos apoiados pelo papo precisam de ajuda além de uma doação
            para conseguirem transformar suas vidas.
          </p>
          <p className="color-dark">
            Por isso, criamos duas formas de apadrinhamento, o
            <span className="color-primary"> Padrinho Financeiro </span>e o
            <span className="color-warning"> Padrinho da Vida.</span>
          </p>
        </header>
      </Container>
      <div className="SponsorshipSystem__columns">
        <div className="SponsorshipSystem__column">
          <BackgroundImage
            Tag="div"
            className="SponsorshipSystem__column-img"
            fluid={padrinhoFinanceiroImg}
          >
            <Container>
              <p>padrinho financeiro</p>
            </Container>
          </BackgroundImage>

          <Container>
            <p>
              O <span className="color-primary"> Padrinho Financeiro</span> faz
              uma doação recorrente de R$25,00 ou R$50,00 para o Papo, pagando a
              mensalidade do plano de internet de um aluno.
            </p>
          </Container>
        </div>
        <div className="SponsorshipSystem__column">
          <BackgroundImage
            Tag="div"
            className="SponsorshipSystem__column-img"
            fluid={padrinhoPraVidaImg}
          >
            <Container>
              <p>padrinho da vida</p>
            </Container>
          </BackgroundImage>

          <Container>
            <p>
              O <span className="color-warning">Padrinho da Vida</span> vai
              guiar um dos alunos pelo caminho da vida, ajudando com questões
              sociais, de estudos, da faculdade e futuramente de
              empregabilidade, dependendo sempre do nível de engajamento
              desejado pelo padrinho e o aluno que identificamos por meio do
              forms.
            </p>
          </Container>
        </div>
      </div>
    </>
  )
}

export default memo(SponsorshipSystem)

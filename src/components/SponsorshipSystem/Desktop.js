import React, { memo } from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Container from "../Container"
import Title from "../Title"

const SponsorshipSystem = () => {
  const data = useStaticQuery(
    graphql`
      query {
        sistemaApadrinhamento: file(
          relativePath: { eq: "sistema-apadrinhamento.png" }
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

  const sistemaApadrinhamentoImg =
    data.sistemaApadrinhamento.childImageSharp.fluid

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
            <strong className="color-primary"> Padrinho Financeiro </strong>e o
            <strong className="color-warning"> Padrinho da Vida.</strong>
          </p>
        </header>
      </Container>

      <div className="SponsorshipSystem__columns">
        <BackgroundImage
          Tag="section"
          className="SponsorshipSystem__columns-cover"
          fluid={sistemaApadrinhamentoImg}
        >
          <Container>
            <div className="SponsorshipSystem__columns-cover-inner">
              <div className="SponsorshipSystem__bg SponsorshipSystem__bg-1">
                <p>padrinho financeiro</p>
              </div>
              <div className="SponsorshipSystem__bg SponsorshipSystem__bg-2">
                <p>Padrinho da vida</p>
              </div>
            </div>
          </Container>
        </BackgroundImage>
        <Container>
          <div className="SponsorshipSystem__columns-inner">
            <div className="SponsorshipSystem__column">
              <p>
                O <span className="color-primary"> Padrinho Financeiro</span>{" "}
                faz uma doação recorrente de R$25,00 ou R$50,00 para o Papo,
                pagando a mensalidade do plano de internet de um aluno.
              </p>
            </div>
            <div className="SponsorshipSystem__column">
              <p>
                O <span className="color-warning">Padrinho da Vida</span> vai
                guiar um dos alunos pelo caminho da vida, ajudando com questões
                sociais, de estudos, da faculdade e futuramente de
                empregabilidade, dependendo sempre do nível de engajamento
                desejado pelo padrinho e o aluno que identificamos por meio do
                forms.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default memo(SponsorshipSystem)

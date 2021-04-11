import React, { memo } from "react"
import { HelpedStudentsWrapper } from "./styled"
import BackgroundImage from "gatsby-background-image"
import Container from "../Container"
import { graphql, useStaticQuery } from "gatsby"

const HelpedStudents = ({}) => {
  const data = useStaticQuery(
    graphql`
      query {
        image: file(relativePath: { eq: "alunos-ajudados.png" }) {
          childImageSharp {
            fluid(maxWidth: 1170, quality: 70) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  const imageData = data.image.childImageSharp.fluid

  return (
    <HelpedStudentsWrapper>
      <BackgroundImage
        Tag="section"
        className="HelpedStudents"
        fluid={imageData}
      >
        <Container>
          <div className="HelpedStudents__inside">
            <p>
              mais de <span className="color-primary-lighter"> 250 </span>{" "}
              alunos apoiados.
            </p>
            <p>
              mais de{" "}
              <span className="color-primary-lighter">R$ 80.000,00</span>{" "}
              arrecadados.
            </p>
          </div>
        </Container>
      </BackgroundImage>
    </HelpedStudentsWrapper>
  )
}

export default memo(HelpedStudents)

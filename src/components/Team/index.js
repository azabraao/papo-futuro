import React, { memo, useEffect, useState } from "react"
import { MakersWrapper } from "./styled"
import Section from "../Section"
import Title from "../Title"
import Container from "../Container"
import { useStaticQuery, graphql } from "gatsby"
import Card from "./Card"
import Slide from "../Slide"

const Team = () => {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 1170)
  }, [])

  const data = useStaticQuery(
    graphql`
      query {
        isabellaConcilio: file(
          relativePath: { eq: "team/isabella-concilio.png" }
        ) {
          childImageSharp {
            fixed(width: 120, height: 120, quality: 70) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        caioSantini: file(relativePath: { eq: "team/caio-santini.jpeg" }) {
          childImageSharp {
            fixed(width: 120, height: 120, quality: 70) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        sofiaLorenzo: file(relativePath: { eq: "team/sofia-lorenzo.jpeg" }) {
          childImageSharp {
            fixed(width: 120, height: 120, quality: 70) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        danielSouza: file(relativePath: { eq: "team/daniel-souza.jpeg" }) {
          childImageSharp {
            fixed(width: 120, height: 120, quality: 70) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        mariaVictoria: file(relativePath: { eq: "team/maria-victoria.jpeg" }) {
          childImageSharp {
            fixed(width: 120, height: 120, quality: 70) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        gabrielaMorete: file(
          relativePath: { eq: "team/gabriela-morete.jpeg" }
        ) {
          childImageSharp {
            fixed(width: 120, height: 120, quality: 70) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        joaoNeves: file(relativePath: { eq: "team/joao-neves.jpeg" }) {
          childImageSharp {
            fixed(width: 120, height: 120, quality: 70) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        rafaelAutilio: file(relativePath: { eq: "team/rafael.jpeg" }) {
          childImageSharp {
            fixed(width: 120, height: 120, quality: 70) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        guilhermeLopes: file(
          relativePath: { eq: "team/guilherme-lopes.jpeg" }
        ) {
          childImageSharp {
            fixed(width: 120, height: 120, quality: 70) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        luisaMaluli: file(relativePath: { eq: "team/luisa-maluli.jpeg" }) {
          childImageSharp {
            fixed(width: 120, height: 120, quality: 70) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        luizaLuftalla: file(relativePath: { eq: "team/luiza-luftalla.jpeg" }) {
          childImageSharp {
            fixed(width: 120, height: 120, quality: 70) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        daphne: file(relativePath: { eq: "team/daphne.jpeg" }) {
          childImageSharp {
            fixed(width: 120, height: 120, quality: 70) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        leonAmiralian: file(relativePath: { eq: "team/leon-amiralian.jpeg" }) {
          childImageSharp {
            fixed(width: 120, height: 120, quality: 70) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        sophiaHess: file(relativePath: { eq: "team/sophia-hess.jpg" }) {
          childImageSharp {
            fixed(width: 120, height: 120, quality: 70) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        alexandreKampel: file(
          relativePath: { eq: "team/alexandre-kampel.jpeg" }
        ) {
          childImageSharp {
            fixed(width: 120, height: 120, quality: 70) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        fernandaColonnezi: file(
          relativePath: { eq: "team/fernanda-colonnezi.jpeg" }
        ) {
          childImageSharp {
            fixed(width: 120, height: 120, quality: 70) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        mariaEduarda: file(relativePath: { eq: "team/maria-eduarda.jpeg" }) {
          childImageSharp {
            fixed(width: 120, height: 120, quality: 70) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        camilaLolli: file(relativePath: { eq: "team/camila-lolli.jpeg" }) {
          childImageSharp {
            fixed(width: 120, height: 120, quality: 70) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        nathaliaBruni: file(relativePath: { eq: "team/nathalia-bruni.jpeg" }) {
          childImageSharp {
            fixed(width: 120, height: 120, quality: 70) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        juliana: file(relativePath: { eq: "team/juliana.jpg" }) {
          childImageSharp {
            fixed(width: 120, height: 120, quality: 70) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        lara: file(relativePath: { eq: "team/lara.jpeg" }) {
          childImageSharp {
            fixed(width: 120, height: 120, quality: 70) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        leon: file(relativePath: { eq: "team/leon.jpeg" }) {
          childImageSharp {
            fixed(width: 120, height: 120, quality: 70) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  const isabellaConcilio = data.isabellaConcilio.childImageSharp.fixed
  const caioSantini = data.caioSantini.childImageSharp.fixed
  const sofiaLorenzo = data.sofiaLorenzo.childImageSharp.fixed
  const danielSouza = data.danielSouza.childImageSharp.fixed
  const mariaVictoria = data.mariaVictoria.childImageSharp.fixed
  const joaoNeves = data.joaoNeves.childImageSharp.fixed
  const rafaelAutilio = data.rafaelAutilio.childImageSharp.fixed
  const guilhermeLopes = data.guilhermeLopes.childImageSharp.fixed
  const luisaMaluli = data.luisaMaluli.childImageSharp.fixed
  const luizaLuftalla = data.luizaLuftalla.childImageSharp.fixed
  const daphne = data.daphne.childImageSharp.fixed
  const sophiaHess = data.sophiaHess.childImageSharp.fixed
  const alexandreKampel = data.alexandreKampel.childImageSharp.fixed
  const fernandaColonnezi = data.fernandaColonnezi.childImageSharp.fixed
  const mariaEduarda = data.mariaEduarda.childImageSharp.fixed
  const camilaLolli = data.camilaLolli.childImageSharp.fixed
  const nathaliaBruni = data.nathaliaBruni.childImageSharp.fixed
  const juliana = data.juliana.childImageSharp.fixed
  const lara = data.lara.childImageSharp.fixed
  const gabrielaMorete = data.gabrielaMorete.childImageSharp.fixed
  const leon = data.leon.childImageSharp.fixed

  const profiles = [
    {
      title: "Caio Santini",
      link: "https://www.linkedin.com/in/caio-santini-694488173/",
      info: "FGV",
      image: caioSantini,
    },
    {
      title: "Sofia Lorenzo",
      link: "https://www.linkedin.com/in/sofia-von-uhlendorff-313a36153/",
      info: "ESPM",
      image: sofiaLorenzo,
    },
    {
      title: "Daniel Souza",
      link: "https://www.linkedin.com/in/danieel-silva/",
      info: "ETEC",
      image: danielSouza,
    },
    {
      title: "Maria Victoria",
      link: "https://www.linkedin.com/in/maria-victoria-monteiro-266971206/",
      info: "FGV",
      image: mariaVictoria,
    },
    {
      title: "João Neves",
      link: "https://www.linkedin.com/in/joaoneves99/",
      info: "FGV",
      image: joaoNeves,
    },
    {
      title: "Gabriela Morete ",
      link: "https://www.linkedin.com/in/gabriela-morete-79ab0b16a/",
      info: "FGV",
      image: gabrielaMorete,
    },

    {
      title: "Isabella Concilio",
      link: "https://www.linkedin.com/in/isabellaconcilio/",
      info: "ESPM",
      image: isabellaConcilio,
    },
    {
      title: "Rafael Autilio",
      link: "https://www.linkedin.com/in/rafaelcastelucciautilio/",
      info: "Insper",
      image: rafaelAutilio,
    },
    {
      title: "Guilherme Lopes",
      link: "https://www.linkedin.com/in/guilherme-lopes-4010b21b1/",
      info: "FGV",
      image: guilhermeLopes,
    },
    {
      title: "Luisa Maluli",
      link: "https://www.linkedin.com/in/luisa-maluli-a89026198/",
      info: "FGV",
      image: luisaMaluli,
    },
    {
      title: "Luiza Luftalla",
      link: "https://www.linkedin.com/in/luiza-lutfalla-2578951b4/",
      info: "FGV",
      image: luizaLuftalla,
    },
    {
      title: "Daphne Lilli",
      link: "https://www.linkedin.com/in/daphnelilli",
      info: "FGV",
      image: daphne,
    },
    {
      title: "Leon Amiralian ",
      link: "https://www.linkedin.com/in/leon-amiralian-neto/",
      info: "Bocconi University",
      image: leon,
    },
    {
      title: "Sophia Hess",
      link: "https://www.linkedin.com/in/sophia-hess-a20201198/",
      info: "FGV",
      image: sophiaHess,
    },
    {
      title: "Alexandre Kampel",
      link: "https://www.linkedin.com/in/alexandre-kampel/",
      info: "FGV",
      image: alexandreKampel,
    },
    {
      title: "Fernanda Colonnezi",
      link: "https://www.linkedin.com/in/fernanda-colonnezi-27673b197/",
      info: "Insper",
      image: fernandaColonnezi,
    },
    {
      title: "Maria Eduarda",
      link:
        "https://www.linkedin.com/in/maria-eduarda-da-costa-veloso-307ba51a8/",
      image: mariaEduarda,
      info: "Insper",
    },
    {
      title: "Camila Lolli",
      link: "https://www.linkedin.com/in/camilalollidomingues/",
      info: "Insper",
      image: camilaLolli,
    },
    {
      title: "Nathália Bruni",
      link:
        "https://www.linkedin.com/in/nath%C3%A1lia-araujo-vieira-bruni-17320b171/",
      info: "FGV",
      image: nathaliaBruni,
    },
    {
      title: "Juliana Dalla",
      link: "https://www.linkedin.com/in/juliana-dalla-costa-27b020154/",
      info: "PUC",
      image: juliana,
    },
    {
      title: "Lara Tasca",
      link: "https://www.linkedin.com/in/lara-tasca-giusa-320828208",
      info: "Insper",
      image: lara,
    },
  ]

  return (
    <Section id="equipe" noPaddingBottom={true} isDesktop={isDesktop} background="gray-lighter">
      <Container>
        <MakersWrapper>
          <Title
            lineColor="danger-dark"
            titleColor="warning"
            centeredOnMobile={true}
          >
            quem faz acontecer
          </Title>
          <div className="Makers__list">
            <Slide slideCentered={false}>
              {profiles.map(({ image, title, link, info }, index) => (
                <Card
                  key={index}
                  image={image}
                  title={title}
                  linkedinLink={link}
                  initialInfo={info}
                />
              ))}
            </Slide>
          </div>
        </MakersWrapper>
      </Container>
    </Section>
  )
}

export default memo(Team)

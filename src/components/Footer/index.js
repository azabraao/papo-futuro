import React, { memo, useEffect, useState } from "react"
import * as S from "./styled"
import Container from "../Container"
import { Facebook, Twitter, LinkedIn, Instagram, YouTube } from "./Icons"
import LogoMobile from "./LogoMobile"
import LogoDesktop from "./LogoDesktop"

const Footer = () => {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 1170)
  }, [])

  return (
    <S.FooterWrapper>
      <div className="Footer__top">
        <Container>
          <div className="Footer__inside">
            {!isDesktop && (
              <div className="Footer__logo">
                <LogoMobile />
              </div>
            )}
            <div className="Footer__links">
              <div className="Footer__links-column">
                <a className="Footer__link color-primary" href="#home">
                  home
                </a>
                <a className="Footer__link color-primary" href="#o-projeto">
                  o projeto
                </a>
                <a className="Footer__link color-primary" href="#como-funciona">
                  como funciona
                </a>
                <a className="Footer__link color-primary" href="#depoimentos">
                  depoimentos
                </a>
                <a className="Footer__link color-primary" href="#conquistas">
                  conquistas
                </a>
              </div>
              <div className="Footer__links-column">
                <a className="Footer__link color-primary" href="#midia">
                  mídia
                </a>
                <a className="Footer__link color-primary" href="#apoiadores">
                  apoiadores
                </a>
                <a className="Footer__link color-danger" href="#doe-agora">
                  doe agora
                </a>
                <a className="Footer__link color-primary" href="#contato">
                  contato
                </a>
              </div>
            </div>
            <div className="Footer__desktop-column">
              {isDesktop && (
                <div className="Footer__desktop-column-img">
                  <LogoDesktop />
                </div>
              )}
              <div className="Footer__social">
                <Facebook />
                <Twitter />
                <LinkedIn />
                <Instagram />
                <YouTube />
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="Footer__bottom">
        <Container>
          <p>PAPOFUTURO.ORG - 2020. TODOS OS DIREITOS RESERVADOS</p>
        </Container>
      </div>
    </S.FooterWrapper>
  )
}

export default memo(Footer)

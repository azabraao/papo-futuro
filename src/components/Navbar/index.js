import React, { useState, memo } from "react"
import Logo from "../Logo"
import * as S from "./styled"
import Container from "../Container"
import classNames from "classnames"

const Navbar = () => {
  const [menuIsActive, setMenuIsActive] = useState(false)

  return (
    <S.NavbarWrapper className="Navbar">
      <Container>
        <div className="Navbar__inside">
          <div className="Navbar__logo">
            <Logo />
          </div>
          <div
            className={classNames("Navbar__hamburguer", {
              active: menuIsActive,
            })}
            onClick={() => setMenuIsActive(!menuIsActive)}
          >
            <span className="Navbar__hamburguer-line"></span>
          </div>
          <div
            className={classNames("Navbar__menu", {
              active: menuIsActive,
            })}
          >
            <ul className="Navbar__menu-links">
              <li className="Navbar__menu-link">
                <a className="Navbar__menu-link-anchor" href="#o-projeto">
                  o projeto
                </a>
              </li>
              <li className="Navbar__menu-link">
                <a className="Navbar__menu-link-anchor" href="#como-funciona">
                  como funciona
                </a>
              </li>
              <li className="Navbar__menu-link">
                <a className="Navbar__menu-link-anchor" href="#depoimentos">
                  depoimentos
                </a>
              </li>
              <li className="Navbar__menu-link">
                <a className="Navbar__menu-link-anchor" href="#conquistas">
                  conquistas
                </a>
              </li>
              <li className="Navbar__menu-link">
                <a className="Navbar__menu-link-anchor" href="#midia">
                  mídia
                </a>
              </li>
              <li className="Navbar__menu-link">
                <a className="Navbar__menu-link-anchor" href="#apoiadores">
                  apoiadores
                </a>
              </li>
              <li className="Navbar__menu-link">
                <a className="Navbar__menu-link-anchor" href="#equipe">
                  equipe
                </a>
              </li>
              <li className="Navbar__menu-link">
                <a className="Navbar__menu-link-anchor" href="#contato">
                  contato
                </a>
              </li>
              <li className="Navbar__menu-link">
                <a className="Navbar__menu-link-anchor Navbar__menu-link-anchor--btn" href="#doe-agora">
                  doe agora
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </S.NavbarWrapper>
  )
}

export default memo(Navbar)

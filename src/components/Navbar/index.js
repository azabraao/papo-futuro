import React, { memo } from "react"
import * as S from "./styled"

const Navbar = () => {
  return (
    <S.NavbarWrapper className="Navbar">
      <div className="container">
        <div className="Navbar__inside">
          <div className="Navbar__logo">logo</div>
          <div className="Navbar__hamburguer">
            <span className="Navbar__hamburguer-line"></span>
          </div>
          <div className="Navbar__menu">
            <ul className="Navbar__menu-links">
              <li className="Navbar__menu-link">
                <a className="Navbar__menu-link-anchor" href="#">
                  O projeto
                </a>
              </li>
              <li className="Navbar__menu-link">
                <a className="Navbar__menu-link-anchor" href="#">
                  como funciona
                </a>
              </li>
              <li className="Navbar__menu-link">
                <a className="Navbar__menu-link-anchor" href="#">
                  depoimentos
                </a>
              </li>
              <li className="Navbar__menu-link">
                <a className="Navbar__menu-link-anchor" href="#">
                  conquistas
                </a>
              </li>
              <li className="Navbar__menu-link">
                <a className="Navbar__menu-link-anchor" href="#">
                  mídia
                </a>
              </li>
              <li className="Navbar__menu-link">
                <a className="Navbar__menu-link-anchor" href="#">
                  apoiadores
                </a>
              </li>
              <li className="Navbar__menu-link">
                <a className="Navbar__menu-link-anchor" href="#">
                  equipe
                </a>
              </li>
              <li className="Navbar__menu-link">
                <a className="Navbar__menu-link-anchor" href="#">
                  contato
                </a>
              </li>
              <li className="Navbar__menu-link">
                <a className="Button" href="#">
                  doe agora
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </S.NavbarWrapper>
  )
}

export default memo(Navbar)

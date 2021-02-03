import styled from "styled-components"
import media from "styled-media-query"

export const NavbarWrapper = styled.nav`
  padding-bottom: 20px;
  position: relative;
  z-index: 1;
  padding-top: 58px;
  padding-left: 25px;

  .Navbar__inside {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    .Navbar__logo {
    }
    .Navbar__hamburguer.active {
      .Navbar__hamburguer-line:before {
        bottom: 0;
        transform: rotate(45deg);
      }
      .Navbar__hamburguer-line:after {
        transform: rotate(135deg);
        top: -2px;
      }
      .Navbar__hamburguer-line {
        transition: 0.3s;
        background: rgba(0, 0, 0, 0);
      }
    }
    .Navbar__hamburguer {
      position: relative;
      z-index: 2;
      cursor: pointer;
      height: 21px;
      display: flex;
      align-items: center;

      .Navbar__hamburguer-line:before,
      .Navbar__hamburguer-line:after {
        content: "";
        position: relative;
        height: 2px;
        width: 36px;
        background: var(--white);
        width: 36px;
        height: 2px;
        border-radius: 5px;
        position: relative;
        display: block;
        transition: 0.3s;
      }

      .Navbar__hamburguer-line:before {
        bottom: 7.5px;
      }

      .Navbar__hamburguer-line:after {
        top: 5px;
      }

      .Navbar__hamburguer-line {
        background: var(--white);
        width: 36px;
        height: 2px;
        border-radius: 5px;
        position: relative;
        transition: 0.3s;
      }
      img {
      }
    }
    .Navbar__menu {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: rgba(240, 248, 255, 0.95);
      padding: 32px;
      opacity: 0;
      pointer-events: none;
      overflow: hidden;
      min-height: 100vh;

      ${media.greaterThan("large")`
          min-height: 0;
        `}

      .Navbar__menu-links {
        padding-top: 80px;

        .Navbar__menu-link:nth-child(1) {
          right: -50px;
        }

        .Navbar__menu-link:nth-child(2) {
          right: -70px;
        }

        .Navbar__menu-link:nth-child(3) {
          right: -90px;
        }

        .Navbar__menu-link:nth-child(4) {
          right: -100px;
        }

        .Navbar__menu-link:nth-child(5) {
          right: -120px;
        }

        .Navbar__menu-link:nth-child(6) {
          right: -140px;
        }

        .Navbar__menu-link {
          text-align: right;
          margin-bottom: 20px;
          position: relative;
          right: -50px;
          transition: all 1s;

          .Navbar__menu-link-anchor {
            text-decoration: none;
            font-style: normal;
            font-weight: bold;
            font-size: 16px;
            line-height: 19px;
            letter-spacing: 0.05em;
            text-transform: uppercase;
          }
        }
      }

      ${media.greaterThan("medium")`
          .Navbar__menu-links {
            padding: 80px 2rem 0 2rem;
            width: 36rem;
            margin: 0 auto;
          }
        `}
    }
    .Navbar__menu.active {
      opacity: 1;
      pointer-events: all;
      transition: 0.3s;

      .Navbar__menu-links {
        padding-top: 80px;

        .Navbar__menu-link {
          right: 0;
        }
      }
    }
  }

  ${media.greaterThan("large")`

      padding-top: 80px;
      padding-left: 0;

      .Navbar__inside {
        align-items: center;

        .Navbar__logo {
          strong {
            font-size: 24px;
            line-height: 28px;
          }
        }
        .Navbar__hamburguer.active {
          display: none;
        }
        .Navbar__hamburguer {
          display: none;
        }
        .Navbar__menu {
          position: static;
          background: rgba(0, 0, 0, 0);
          padding: 0;
          opacity: 1;
          pointer-events: all;
          overflow: visible;

          .Navbar__menu-links {
            padding: 0;
            width: auto;
            width: 803px;
            display: flex;
            justify-content: space-between;
            padding-bottom: 6px;

            .Navbar__menu-link {
              text-align: center;
              margin-bottom: 0;
              position: static;
              padding: 0;
              display: inline-block;

              .Navbar__menu-link-anchor {
                text-decoration: none;
                font-style: normal;
                font-weight: bold;
                font-size: 16px;
                line-height: 19px;
                letter-spacing: 0.05em;
                text-transform: uppercase;
              }
            }
          }
        }
        .Navbar__menu.active {
          opacity: 1;

          .Navbar__menu-links {
            padding: 0;
          }
        }
      }
    
    `}
`

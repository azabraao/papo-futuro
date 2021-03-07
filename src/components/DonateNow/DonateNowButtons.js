import React, { memo, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import DonateModal from "../DonateModal"

const DonateNowDesktop = () => {
  const [showModal, setShowModal] = useState(false)

  const data = useStaticQuery(
    graphql`
      query {
        paypalLogo: file(relativePath: { eq: "paypal-logo.png" }) {
          childImageSharp {
            fixed(width: 40, height: 20) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  const paypalLogo = data.paypalLogo.childImageSharp.fixed

  const openModal = () => {
    setShowModal(true)
  }

  const hideModal = () => {
    setShowModal(false)
  }

  return (
    <>
      <a
        target="_blank" rel="noreferrer"
        href="https://docs.google.com/forms/d/e/1FAIpQLSfX5-FSJ9_CFsbpbl30NP1kloaD8ehwMGvVuHq_LvG5W6AsGA/viewform"
        className="DonateNow__button DonateNow__button-1"
      >
        quero doar um dispositivo eletrônico
      </a>
      <a onClick={openModal} className="DonateNow__button DonateNow__button-2">
        quero financiar o projeto
      </a>
      <a className="DonateNow__button DonateNow__button-3">
        <Img fixed={paypalLogo} />
        doação internacional
      </a>
      {showModal && <DonateModal hideModal={hideModal} />}
    </>
  )
}

export default memo(DonateNowDesktop)

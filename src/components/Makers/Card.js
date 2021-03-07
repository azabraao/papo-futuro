import React, { memo } from "react"
import Img from "gatsby-image"
import { CardWrapper } from "./styled"

const Card = ({ image, initialInfo, title, linkedinLink }) => {
  return (
    <CardWrapper className="Card">
      <div className="Card__img">
        <Img fixed={image} />
      </div>
      <div className="Card__title">
        <h3>{title}</h3>
      </div>
      <div className="Card__description">
        <p>
          {initialInfo}
          <a className="Card__description-link" href={linkedinLink} target="_blank" rel="noreferrer" rel="noopener noreferrer">
            <LinkedinLogo />
          </a>
        </p>
      </div>
    </CardWrapper>
  )
}

const LinkedinLogo = () => (
  <svg
    id="_004-linkedin-logo"
    data-name="004-linkedin-logo"
    xmlns="http://www.w3.org/2000/svg"
    width="15.698"
    height="15"
    viewBox="0 0 15.698 15"
  >
    <path
      id="LinkedIn"
      d="M15.7,18.754v5.8H12.333V19.143c0-1.36-.487-2.289-1.7-2.289A1.841,1.841,0,0,0,8.9,18.085a2.3,2.3,0,0,0-.112.82v5.652H5.425s.045-9.171,0-10.121H8.79v1.435l-.022.033H8.79v-.033A3.342,3.342,0,0,1,11.823,14.2C14.038,14.2,15.7,15.646,15.7,18.754ZM1.9,9.558a1.754,1.754,0,1,0-.045,3.5h.022a1.754,1.754,0,1,0,.022-3.5Zm-1.7,15H3.564V14.437H.2Z"
      transform="translate(0 -9.558)"
      fill="#e88323"
    />
  </svg>
)

export default memo(Card)

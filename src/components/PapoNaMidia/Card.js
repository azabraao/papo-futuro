import React, { memo } from "react"
import Img from "gatsby-image"
import { CardWrapper } from "./styled"

const Card = ({ image, preTitle, title, description, link }) => {
  return (
    <CardWrapper className="Card">
      <div className="Card__img">
        <a href={link} target="_blank">
          <Img fluid={image} />
        </a>
      </div>
      <div className="Card__preTitle">
        <a href={link} target="_blank">
          <span>{preTitle}</span>
        </a>
      </div>
      <div className="Card__title">
        <a href={link} target="_blank">
          <h3>{title}</h3>
        </a>
      </div>
      <div className="Card__description">
        <p>
          {description}{" "}
          <a className="Card__description-link" href={link} target="_blank">
            Ver mais
          </a>
        </p>
      </div>
    </CardWrapper>
  )
}

export default memo(Card)

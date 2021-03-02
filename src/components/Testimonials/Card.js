import React, { memo } from "react"
import Img from "gatsby-image"
import { CardWrapper } from "./styled"

const Card = ({ image, name, title, description }) => {
  return (
    <CardWrapper className="Card">
      <div className="Card__img">
        <Img fixed={image} />
      </div>
      <div className="Card__name">
        <h3>{name}</h3>
      </div>
      <div className="Card__title">
        <h3>{title}</h3>
      </div>
      <div className="Card__description">
        <p>{description}</p>
      </div>
    </CardWrapper>
  )
}

export default memo(Card)

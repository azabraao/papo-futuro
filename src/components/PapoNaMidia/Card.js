import React, { memo, useEffect, useState } from "react"
import Img from "gatsby-image"
import { CardWrapper } from "./styled"

const Card = ({ image, preTitle, title, description, link }) => {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 1170)
  }, [])

  return (
    <CardWrapper className="Card">
      <div className="Card__img">
        <a href={link} target="_blank" rel="noreferrer">
          <Img fluid={image} />
        </a>
      </div>
      <div className="Card__preTitle">
        <a href={link} target="_blank" rel="noreferrer">
          <span>{preTitle}</span>
        </a>
      </div>
      <div className="Card__title">
        <a href={link} target="_blank" rel="noreferrer">
          <h3>{title}</h3>
        </a>
      </div>
      {isDesktop && (
        <div className="Card__description">
          <p>
            {description}{" "}
            <a className="Card__description-link" href={link} target="_blank" rel="noreferrer">
              Ver mais
            </a>
          </p>
        </div>
      )}
    </CardWrapper>
  )
}

export default memo(Card)

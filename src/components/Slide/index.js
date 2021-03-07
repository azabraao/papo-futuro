import React, { memo, useState } from "react"
import Slider from "react-slick"
import { SlideArrow } from "./styled"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Slide = ({ children, slideCentered = true }) => {
  const [slideDirection, setSlideDirection] = useState("")

  const onArrowClick = direction => setSlideDirection(direction)

  const settings = {
    className: "center",
    dots: false,
    infinite: false,
    lazyLoad: true,
    centerMode: slideCentered,
    speed: 500,
    swipeToSlide: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: (
      <NextArrow onArrowClick={onArrowClick} slideDirection={slideDirection} />
    ),
    prevArrow: (
      <PrevArrow onArrowClick={onArrowClick} slideDirection={slideDirection} />
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          infinite: true,
          slidesToShow: 2,
        },
      },
    ],
  }

  return <Slider {...settings}>{children}</Slider>
}

const PrevArrow = ({ onClick, onArrowClick, slideDirection }) => {
  return (
    <SlideArrow
      isLeft={true}
      active={slideDirection === "left"}
      onClick={e => {
        onArrowClick("left")
        onClick(e)
      }}
    >
      <svg
        width="25"
        height="20"
        viewBox="0 0 25 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="prev prevprev"
      >
        <path d="M10.862 0L1.8049 8.23309L0 9.87375L1.8049 11.5134L10.862 19.7368L12.6668 18.1015L4.8862 11.0332H25V8.71467H4.8862L12.6668 1.64323L10.862 0Z" />
      </svg>
    </SlideArrow>
  )
}

const NextArrow = ({ onClick, onArrowClick, slideDirection }) => {
  return (
    <SlideArrow
      isLeft={false}
      onClick={e => {
        onArrowClick("right")
        onClick(e)
      }}
      active={slideDirection === "right"}
    >
      <svg
        width="25"
        height="20"
        viewBox="0 0 25 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="next"
      >
        <path d="M14.138 0L23.1951 8.26588L25 9.91312L23.1951 11.5592L14.138 19.8154L12.3331 18.1736L20.1138 11.0771H0V8.74934H20.1138L12.3331 1.64978L14.138 0Z" />
      </svg>
    </SlideArrow>
  )
}

export default memo(Slide)

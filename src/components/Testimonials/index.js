import React, { memo, useState, useEffect } from "react"
import Title from "../Title"
import Slide from "./Slide"
import { TestimonialsWrapper } from "./styled"
import Container from "../Container"

const Testimonials = () => {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 1170)
  }, [])

  return (
    <TestimonialsWrapper>
      <Title
        titleColor="black"
        centeredOnMobile={true}
        lineColor="primary-lighter"
      >
        depoimentos
      </Title>
      {isDesktop ? (
        <Container>
          <Slide />
        </Container>
      ) : (
        <Slide />
      )}
    </TestimonialsWrapper>
  )
}

export default memo(Testimonials)

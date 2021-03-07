import React, { memo, useState, useEffect } from "react"
import Title from "../Title"
import Slide from "./Slide"
import { TestimonialsWrapper } from "./styled"
import Container from "../Container"
import Section from "../Section"

const Testimonials = () => {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 1170)
  }, [])

  return (
    <Section id="depoimentos">
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
    </Section>
  )
}

export default memo(Testimonials)

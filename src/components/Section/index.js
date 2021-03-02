import React, { memo } from "react"
import { SectionWrapper } from "./styled"

const Section = ({ children, background }) => {
  return <SectionWrapper background={background}>{children}</SectionWrapper>
}

export default memo(Section)

import React, { memo } from "react"
import { SectionWrapper } from "./styled"

const Section = ({ children, ...rest }) => {
  return <SectionWrapper {...rest}>{children}</SectionWrapper>
}

export default memo(Section)

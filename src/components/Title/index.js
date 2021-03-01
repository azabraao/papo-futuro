import React, { memo } from "react"
import { TitleWrapper } from "./styled"

const Title = ({ children, titleColor, lineColor, centeredOnMobile }) => {
  return (
    <TitleWrapper
      lineColor={lineColor}
      titleColor={titleColor}
      centeredOnMobile={centeredOnMobile}
    >
      {children}
    </TitleWrapper>
  )
}

export default memo(Title)

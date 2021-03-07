import React, { memo } from "react"
import { TitleWrapper } from "./styled"

const Title = ({
  children,
  titleColor,
  lineColor,
  centeredOnMobile,
  titleMarginBottom,
}) => {
  return (
    <TitleWrapper
      lineColor={lineColor}
      titleColor={titleColor}
      centeredOnMobile={centeredOnMobile}
      titleMarginBottom={titleMarginBottom}
    >
      {children}
    </TitleWrapper>
  )
}

export default memo(Title)

import React, { memo } from "react"
import * as S from "./styled"

const Container = ({ children, noPaddingOnMobile }) => {
  return (
    <S.ContainerWrapper noPaddingOnMobile={noPaddingOnMobile}>
      {children}
    </S.ContainerWrapper>
  )
}

export default memo(Container)

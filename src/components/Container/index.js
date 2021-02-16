import React, { memo } from "react"
import * as S from "./styled"

const Container = ({ children }) => {
  return <S.ContainerWrapper>{children}</S.ContainerWrapper>
}

export default memo(Container)

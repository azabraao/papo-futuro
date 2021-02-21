import React, { memo, useEffect, useState } from "react"
import * as S from "./styled"
import DonateNowDesktop from "./DonateNowDesktop"
import DonateNowMobile from "./DonateNowMobile"

const DonateNow = () => {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 1170)
  }, [])

  return (
    <S.DonateNowWrapper>
      {isDesktop ? <DonateNowDesktop /> : <DonateNowMobile />}
    </S.DonateNowWrapper>
  )
}

export default memo(DonateNow)

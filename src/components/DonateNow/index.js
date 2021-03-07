import React, { memo, useEffect, useState } from "react"
import { DonateNowWrapper } from "./styled"
import DonateNowDesktop from "./DonateNowDesktop"
import DonateNowMobile from "./DonateNowMobile"

const DonateNow = () => {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 1170)
  }, [])

  return (
    <DonateNowWrapper id="doe-agora">
      {isDesktop ? <DonateNowDesktop /> : <DonateNowMobile />}
    </DonateNowWrapper>
  )
}

export default memo(DonateNow)

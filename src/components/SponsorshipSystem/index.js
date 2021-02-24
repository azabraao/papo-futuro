import React, { memo, useEffect, useState } from "react"
import Desktop from "./Desktop"
import Mobile from "./Mobile"
import * as S from "./styled"

const SponsorshipSystem = () => {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 1170)
  }, [])

  return (
    <S.SponsorshipSystemWrapper className="SponsorshipSystem">
      {isDesktop ? <Desktop /> : <Mobile />}
    </S.SponsorshipSystemWrapper>
  )
}

export default memo(SponsorshipSystem)

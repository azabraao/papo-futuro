import React, { memo, useEffect, useState } from "react"
import Desktop from "./Desktop"
import Mobile from "./Mobile"
import { SponsorshipSystemWrapper } from "./styled"
import Section from "../Section"

const SponsorshipSystem = () => {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 1170)
  }, [])

  return (
    <Section>
      <SponsorshipSystemWrapper className="SponsorshipSystem">
        {isDesktop ? <Desktop /> : <Mobile />}
      </SponsorshipSystemWrapper>
    </Section>
  )
}

export default memo(SponsorshipSystem)

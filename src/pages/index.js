import React from "react"
import AlumnCost from "../components/AlumnCost"
import ContentSection1 from "../components/ContentSection1"
import DonateNow from "../components/DonateNow"
import HowItWorks from "../components/HowItWorks"
import HowMuchCosts from "../components/HowMuchCosts"
import ManifestSection from "../components/ManifestSection"
import Navbar from "../components/Navbar"
import PublicSchoolSection from "../components/PublicSchoolSection"
import SEO from "../components/SEO"
import SiteHeader from "../components/SiteHeader"
import SponsorshipSystem from "../components/SponsorshipSystem"
import GlobalStyles from "../styles/global"

export default function Home() {
  return (
    <div>
      <GlobalStyles />
      <SEO />
      <SiteHeader>
        <Navbar />
      </SiteHeader>
      <ContentSection1 />
      <ManifestSection />
      <PublicSchoolSection />
      <HowMuchCosts />
      <DonateNow />
      <AlumnCost />
      <SponsorshipSystem />
      <HowItWorks/>
    </div>
  )
}

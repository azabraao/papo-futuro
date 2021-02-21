import React from "react"
import ContentSection1 from "../components/ContentSection1"
import HowMuchCosts from "../components/HowMuchCosts"
import ManifestSection from "../components/ManifestSection"
import Navbar from "../components/Navbar"
import PublicSchoolSection from "../components/PublicSchoolSection"
import SEO from "../components/SEO"
import SiteHeader from "../components/SiteHeader"
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
      <HowMuchCosts/>
    </div>
  )
}

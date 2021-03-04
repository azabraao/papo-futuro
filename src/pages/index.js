import React from "react"
import StudentCost from "../components/StudentCost"
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
import Testimonials from "../components/Testimonials"
import GlobalStyles from "../styles/global"
import HelpedStudents from "../components/HelpedStudents"
import Achievements from "../components/Achievements"
import PapoNaMidia from "../components/PapoNaMidia"
import Supporters from "../components/Supporters"
import Makers from "../components/Makers"

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
      <StudentCost />
      <SponsorshipSystem />
      <HowItWorks />
      <Testimonials />
      <HelpedStudents />
      <Achievements />
      <PapoNaMidia />
      <Supporters />
      <Makers />
    </div>
  )
}

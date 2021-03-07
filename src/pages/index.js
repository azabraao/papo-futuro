import React, { Suspense } from "react"
import Navbar from "../components/Navbar"
import SiteHeader from "../components/SiteHeader"
import SEO from "../components/SEO"
import GlobalStyles from "../styles/global"
const StudentCost = React.lazy(() => import("../components/StudentCost"))
const ContentSection1 = React.lazy(() =>
  import("../components/ContentSection1")
)
const DonateNow = React.lazy(() => import("../components/DonateNow"))
const HowItWorks = React.lazy(() => import("../components/HowItWorks"))
const HowMuchCosts = React.lazy(() => import("../components/HowMuchCosts"))
const ManifestSection = React.lazy(() =>
  import("../components/ManifestSection")
)
const PublicSchoolSection = React.lazy(() =>
  import("../components/PublicSchoolSection")
)
const SponsorshipSystem = React.lazy(() =>
  import("../components/SponsorshipSystem")
)
const Testimonials = React.lazy(() => import("../components/Testimonials"))
const HelpedStudents = React.lazy(() => import("../components/HelpedStudents"))
const Achievements = React.lazy(() => import("../components/Achievements"))
const PapoNaMidia = React.lazy(() => import("../components/PapoNaMidia"))
const Supporters = React.lazy(() => import("../components/Supporters"))
const Makers = React.lazy(() => import("../components/Makers"))
const Contato = React.lazy(() => import("../components/Contato"))
const Footer = React.lazy(() => import("../components/Footer"))
const Fonts = React.lazy(() => import("../components/Fonts"))

export default function Home() {
  const isSSR = typeof window === "undefined"

  return (
    <div>
      <GlobalStyles />
      <SEO />
      <SiteHeader>
        <Navbar />
      </SiteHeader>
      {!isSSR && (
        <Suspense fallback={<div>loading....</div>}>
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
          <Contato />
          <Footer />
          <Fonts />
        </Suspense>
      )}
    </div>
  )
}

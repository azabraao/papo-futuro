import React from "react"
import Navbar from "../components/Navbar"
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
    </div>
  )
}

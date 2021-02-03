import React from "react"
import Navbar from "../components/Navbar"
import SEO from "../components/SEO"
import GlobalStyles from "../styles/global"

export default function Home() {
  return (
    <>
      <GlobalStyles />
      <SEO />
      <Navbar />
    </>
  )
}

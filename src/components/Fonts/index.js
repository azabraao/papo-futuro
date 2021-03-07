import React, { memo } from "react"
import { Helmet } from "react-helmet"

const Fonts = () => {
  return (
    <Helmet>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;1,600&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  )
}

export default memo(Fonts)

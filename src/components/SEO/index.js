import React, { memo } from "react"
import { Helmet } from "react-helmet"

const SEO = () => {
  return (
    <Helmet>
      <title>Papofuturo</title>
      <meta
        name="description"
        content="Projeto Papo Futuro - Vamos fazer com que jovens de comunidades voltem a estudar para perseguirem seus sonhos!"
      />
      <meta name="author" content="Papofuturo" />
    </Helmet>
  )
}

export default memo(SEO)

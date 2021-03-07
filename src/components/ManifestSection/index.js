import React, { memo } from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import { ManifestSectionWrapper } from "./styled"

const ManifestSection = () => {
  const data = useStaticQuery(
    graphql`
      query {
        mobileImage: file(relativePath: { eq: "manifesto-mobile.png" }) {
          childImageSharp {
            fluid(maxWidth: 768, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        desktopImage: file(relativePath: { eq: "manifesto-desktop.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  const sources = [
    data.mobileImage.childImageSharp.fluid,
    {
      ...data.desktopImage.childImageSharp.fluid,
      media: `(min-width: 1170px)`,
    },
  ]

  return (
    <ManifestSectionWrapper id="manifesto">
      <BackgroundImage
        Tag="section"
        className="ManifestSectionWrapper__image"
        fluid={sources}
      >
        <a
          href="https://www.youtube.com/watch?v=465SsmWDZ6M&t=3s"
          target="_blank"
          className="ManifestSectionWrapper__click-area"
        >
          <div className="ManifestSectionWrapper__click-area-inside">
            <svg
              width="60"
              height="61"
              viewBox="0 0 60 61"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.4492 20.0721V40.6254L40.3966 30.3488L40.3249 30.2771L25.4492 20.0721Z"
                fill="#FF6F26"
              />
              <path
                d="M30 0.739014C24.0666 0.739014 18.2664 2.49848 13.3329 5.79492C8.39943 9.09137 4.55426 13.7767 2.28363 19.2585C0.0129988 24.7403 -0.581102 30.7723 0.576455 36.5917C1.73401 42.4111 4.59123 47.7566 8.78681 51.9522C12.9824 56.1478 18.3279 59.005 24.1473 60.1626C29.9667 61.3201 35.9987 60.726 41.4805 58.4554C46.9623 56.1848 51.6476 52.3396 54.9441 47.4061C58.2405 42.4726 60 36.6724 60 30.739C60.0004 26.7992 59.2248 22.8979 57.7173 19.258C56.2098 15.618 54.0001 12.3107 51.2142 9.52481C48.4284 6.73896 45.121 4.5292 41.481 3.02171C37.8411 1.51423 33.9398 0.738566 30 0.739014V0.739014ZM41.8575 33.168L26.9288 43.4537C26.4991 43.7129 26.0016 43.8373 25.5005 43.8109C25.0033 43.8026 24.5147 43.6804 24.0721 43.4537C23.6258 43.2108 23.2557 42.8486 23.0034 42.4075C22.7511 41.9664 22.6264 41.4638 22.6432 40.9559V20.5249C22.6387 20.0213 22.7675 19.5253 23.0164 19.0874C23.2653 18.6495 23.6256 18.2852 24.0606 18.0314C24.4957 17.7776 24.9902 17.6433 25.4939 17.6422C25.9976 17.641 26.4926 17.7731 26.9288 18.0249L27.0005 18.0966L41.7858 28.3106C42.2049 28.5611 42.5508 28.9172 42.789 29.3434C43.0272 29.7696 43.1493 30.2508 43.143 30.739C43.1633 31.2215 43.0549 31.7007 42.829 32.1275C42.6031 32.5543 42.2678 32.9134 41.8575 33.168Z"
                fill="#FF6F26"
              />
            </svg>

            <p>Veja nosso manifesto</p>
          </div>
        </a>
      </BackgroundImage>
    </ManifestSectionWrapper>
  )
}

export default memo(ManifestSection)

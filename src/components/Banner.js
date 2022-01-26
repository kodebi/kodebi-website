import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "@emotion/styled"

const Banner = ({ title }) => {
  return (
    <>
      <BannerSection>
        <StaticImage
          src="../assets/images/banner.jpg"
          alt="hero"
          placeholder="blurred"
          layout="fullWidth"
          className="imgWrapper"
          as="div"
        />
        <BannerContainer>
          <BannerTitle>{title}</BannerTitle>
        </BannerContainer>
      </BannerSection>
    </>
  )
}

const BannerSection = styled.section`
  width: 100%;
  position: relative;
  margin: 0 auto;

  .imgWrapper {
    height: 40vh;

    @media (min-width: 800px) {
      height: 250px;
    }
  }
`

const BannerContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`

const BannerTitle = styled.h1`
  text-align: center;
  color: var(--bckgrnd-clr);
  margin-bottom: 0;
`

export default Banner

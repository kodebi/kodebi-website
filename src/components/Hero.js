import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { keyframes } from "@emotion/react"
import { StaticImage } from "gatsby-plugin-image"
import { FaAngleDoubleDown } from "react-icons/fa"
import { header } from "../utils/linksDB"
import { Button } from "@kodebi/libkodebi-ui"

const Hero = () => {
  return (
    <>
      <HeroSection id="home">
        <StaticImage
          src="../assets/images/hero.jpeg"
          alt="hero"
          layout="constrained"
          placeholder="blurred"
          style={{ height: "100%" }}
          as="div"
        />
        <HeroContainer>
          <HeroText>
            <h1>Willkommen bei Kodebi</h1>
            <h3>
              Finde neue spannende Bücher von Leuten aus deiner Nachbarschaft
            </h3>
          </HeroText>
          <a href="https://app.kodebi.de">
            <Button variant="signin" label="Jetzt registrieren" />
          </a>
          <StyledLink to={header[0].url}>
            <ScrollDownIcon>
              <FaAngleDoubleDown />
            </ScrollDownIcon>
          </StyledLink>
        </HeroContainer>
      </HeroSection>
    </>
  )
}

const HeroSection = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  margin: 0 auto;
  display: grid;
  place-items: center;
`

const HeroContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const HeroText = styled.div`
  text-align: center;
  color: var(--bckgrnd-clr);
  margin-bottom: 1rem;
`

const jump = keyframes`
  0% {
    transform: translateY(0);
  }

  10% {
    transform: translateY(20px);
  }

  20% {
    transform: translateY(0);
  }

  30% {
    transform: translateY(20px);
  }

40% {
  transform: translateY(0);
}
`

const ScrollDownIcon = styled.span`
  font-size: 1.5rem;
  padding: 0.5rem;
  border: 0;
  background: transparent;
  color: var(--bckgrnd-clr);
  transition: var(--trnstn);
  position: absolute;
  bottom: 1rem;
  cursor: pointer;
  animation: ${jump} 2s ease-in infinite;

  @media (min-width: 800px) {
    font-size: 3rem;
    padding: 1rem;
  }
`

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Hero

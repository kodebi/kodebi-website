import React from "react"
import styled from "@emotion/styled"
import { FaSearch, FaComments, FaBookReader } from "react-icons/fa"

const HowTo = () => {
  return (
    <HowToSection id="howto">
      <Container data-sal="slide-up" data-sal-easing="ease">
        <h2>Schmökern in fremden Regalen leicht gemacht</h2>
        <p>
          Finde kostenlos Bücher in Deiner Umgebung und teile Wissen mit Leuten
          aus Deiner Hood!
        </p>
      </Container>
      <FlexContainer>
        <FlexItem data-sal="zoom-in" data-sal-easing="ease">
          <IconContainer>
            <FaSearch />
          </IconContainer>
          <h3>Finde Dein neues Lieblingsbuch</h3>
        </FlexItem>
        <FlexItem
          data-sal="zoom-in"
          data-sal-easing="ease"
          data-sal-delay="300"
        >
          <IconContainer>
            <FaComments />
          </IconContainer>
          <h3>Leihe es Dir von dem/der Besitzer*in</h3>
        </FlexItem>
        <FlexItem
          data-sal="zoom-in"
          data-sal-easing="ease"
          data-sal-delay="600"
        >
          <IconContainer>
            <FaBookReader />
          </IconContainer>
          <h3>Mache es Dir gemütlich!</h3>
        </FlexItem>
      </FlexContainer>
    </HowToSection>
  )
}

const HowToSection = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;

  @media (min-width: 800px) {
    padding-top: 100px;
  }
`

const Container = styled.div`
  max-width: var(--mx-wdth);
  text-align: center;
  position: relative;
  padding: 1rem;

  h2 {
    color: var(--brnd-clr);
  }
`

const FlexContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 2rem 0;
    max-width: 1040px;
  }
`

const FlexItem = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
  width: 100%;
`

const IconContainer = styled.span`
  display: flex;
  align-self: center;
  font-size: 3rem;
  margin: 1rem;
  border: 0;
  background: transparent;
  color: var(--brnd-clr);
  transition: var(--trnstn);

  &:hover {
    transform: scale(1.2);
  }

  @media (min-width: 800px) {
    font-size: 4rem;
    margin: 2rem;
  }
`

export default HowTo

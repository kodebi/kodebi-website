import React from "react"
import styled from "@emotion/styled"
import { keyframes } from "@emotion/react"

const CallToAction = () => {
  return (
    <CallToContainer>
      <Container
        data-sal="slide-up"
        data-sal-delay="500"
        data-sal-easing="ease"
      >
        <h3>
          Bist du bereit ein paar Deiner Bücher zu verleihen? Oder möchtest du
          einfach nur ein bisschen stöbern?
        </h3>
        <a href="https://app.kodebi.de">
          <BounceBtn>Hier geht's lang</BounceBtn>
        </a>
      </Container>
    </CallToContainer>
  )
}

const CallToContainer = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  position: relative;
`

const Container = styled.div`
  max-width: var(--mx-wdth);
  padding: 2rem 1rem 0;

  @media (min-width: 800px) {
    padding: 4rem 2rem 0;
    width: 75vw;
    margin-top: 6rem;
  }
`

const bounce = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`

const BounceBtn = styled.button`
  background: var(--brnd-clr);
  border: 2px solid var(--brnd-clr);
  border-radius: var(--brdr-rds);
  color: var(--bckgrnd-clr);
  cursor: pointer;
  margin: 0.25rem 0;
  padding: 0.25rem 0.5rem;
  transition: var(--trnstn);
  animation: ${bounce} 2s ease-in-out infinite;

  &:hover {
    background: var(--bckgrnd-clr-2);
    border: 2px solid var(--bckgrnd-clr-2);
  }

  @media (min-width: 800px) {
    margin: 0.5rem 0;
    padding: 0.5rem 1.25rem;
  }
`

export default CallToAction

import React from "react"
import styled from "@emotion/styled"
import { StaticImage } from "gatsby-plugin-image"

const Benefits = () => {
  return (
    <>
      <BenefitSection id="benefits">
        <WaveContainer
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#D96C75"
            fillOpacity="1"
            d="M0,64L60,80C120,96,240,128,360,149.3C480,171,600,181,720,154.7C840,128,960,64,1080,64C1200,64,1320,128,1380,160L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </WaveContainer>
        <WrapContainer>
          <GridContainer>
            <Article data-sal="slide-right" data-sal-easing="ease">
              <h2>
                Bereichere andere um Dich herum. Biete Deine alten Staubfänger
                zum Verleih an.""
              </h2>
              <BenefitContainer>
                <GridItem>
                  <CircledNumber>1</CircledNumber>
                  <BenefitText>
                    Schnell und einfach Bücher hochladen
                  </BenefitText>
                </GridItem>
                <GridItem>
                  <CircledNumber>2</CircledNumber>
                  <BenefitText>
                    Neugierde in Deiner Umgebung streuen
                  </BenefitText>
                </GridItem>
                <GridItem>
                  <CircledNumber>3</CircledNumber>
                  <BenefitText>
                    Mache anderen Leseratten eine große Freude.
                  </BenefitText>
                </GridItem>
              </BenefitContainer>
            </Article>
            <Article data-sal="slide-left" data-sal-easing="ease">
              <StaticImage
                src="../assets/images/undraw_Reading_re_29f8.svg"
                alt="Reading"
                placeholder="tracedSVG"
                className="reading-svg"
                as="article"
              />
            </Article>
          </GridContainer>
        </WrapContainer>
      </BenefitSection>
    </>
  )
}

const BenefitSection = styled.section`
  width: 100%;
  height: auto;
  display: grid;
  place-items: center;
  padding-top: 30px;

  @media (min-width: 800px) {
    padding-top: 0;
  }
`

const WaveContainer = styled.svg`
  margin: 0;
  position: relative;
  display: block;
`

const WrapContainer = styled.div`
  width: 100%;
  background: linear-gradient(to bottom, var(--brnd-clr), var(--bckgrnd-clr));
  display: flex;
  justify-content: center;
`

const GridContainer = styled.div`
  max-width: var(--mx-wdth);
  margin-bottom: 4rem;

  .reading-svg {
    display: none;
  }

  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    margin-bottom: 10rem;

    .reading-svg {
      display: inline-block;
    }
  }
`

const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    text-align: left;
    padding: 2rem;
    color: var(--bckgrnd-clr);
    margin: 1rem 0 0;
  }
`

const BenefitContainer = styled.aside`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  gap: 1rem;
  padding: 2rem;
`

const GridItem = styled.div`
  display: flex;
  align-items: center;
`

const CircledNumber = styled.span`
  display: grid;
  place-items: center;
  border: 2px solid var(--bckgrnd-clr);
  border-radius: 50%;
  margin-right: 1rem;
  width: 1.5rem;
  height: 1.5rem;
  color: var(--bckgrnd-clr);

  @media (min-width: 800px) {
    width: 3rem;
    height: 3rem;
    margin-right: 2rem;
  }
`

const BenefitText = styled.h4`
  text-align: left;
  margin: 0;
  color: var(--bckgrnd-clr);
`

export default Benefits

import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const teamImageQuery = graphql`
  {
    allFile(sort: { fields: name }) {
      nodes {
        childImageSharp {
          gatsbyImageData(width: 300, height: 300, placeholder: BLURRED)
        }
        name
      }
    }
  }
`

const About = () => {
  const data = useStaticQuery(teamImageQuery)
  const teamNodes = data.allFile.nodes

  return (
    <AboutSection id="about">
      <Container data-sal="slide-up" data-sal-easing="ease">
        <Title>Unsere Vision</Title>
        <p>
          Das Projekt "Kodebi" ist im Rahmen von{" "}
          <a href="https://techlabs.org">TechLabs</a> entstanden. Wir wollen
          einen barrierefreien Zugang zu Unterhaltung und Wissen schaffen und
          einen regen Austausch unter den Menschen befeuern. Aus diesem Grund
          arbeiten wir emsig an einer digitalen Plattform, die das Verleihen von
          Büchern vereinfachen soll.
        </p>
      </Container>
      <TeamArea>
        {teamNodes.map((image, index) => {
          const { name } = image
          const pathToImage = getImage(image)
          return (
            <TeamMember
              key={index}
              data-sal="zoom-in"
              data-sal-easing="ease"
              data-sal-delay="300"
            >
              <GatsbyImage
                image={pathToImage}
                alt={name}
                width={200}
                height={200}
                imgClassName="team-img"
              />
              <MemberInfo>
                <h4>{name}</h4>
              </MemberInfo>
            </TeamMember>
          )
        })}
      </TeamArea>
    </AboutSection>
  )
}

const AboutSection = styled.section`
  width: 100%;
  height: auto;
  display: grid;
  place-items: center;
  padding-top: 60px;

  @media (min-width: 800px) {
    padding-top: 120px;
  }
`

const Container = styled.div`
  max-width: var(--mx-wdth);
  text-align: center;
  position: relative;
  padding: 1rem;

  a {
    color: var(--brnd-clr);
  }

  @media (min-width: 800px) {
    width: 75vw;
  }
`

const Title = styled.h2`
  color: var(--brnd-clr);
`

const TeamArea = styled.div`
  position: relative;
  max-width: var(--mx-wdth);
  width: 100%;
  height: auto;
  padding: 0.5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1rem;

  @media (min-width: 800px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    padding: 1rem;
  }
`

const TeamMember = styled.article`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;

  .team-img {
    border-radius: 50%;
  }
`

const MemberInfo = styled.header`
  text-align: center;
  padding: 1rem;

  h4 {
    color: var(--brnd-clr);
    margin-bottom: 0.5rem;
    text-transform: capitalize;
  }

  @media (min-width: 800px) {
    padding: 2rem;
  }
`

export default About

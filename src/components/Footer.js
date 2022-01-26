import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { footerLinks, footerIcons } from "../utils/linksDB"

const Footer = () => {
  return (
    <>
      <FooterSection>
        <WaveContainer
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#D9C6BA"
            fillOpacity="1"
            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </WaveContainer>
        <FooterContainer>
          <FooterContent>
            <FooterWrapper>
              <p>© 2021 Kodebi. All rights reserved</p>
              <FooterLinks>
                {footerLinks.map(link => (
                  <FooterLink to={link.url} key={link.id}>
                    {link.text}
                  </FooterLink>
                ))}
              </FooterLinks>
            </FooterWrapper>
            <FooterSocial>
              {footerIcons.map(link => {
                return (
                  <IconWrapper href={link.url} key={link.id}>
                    {link.icon}
                  </IconWrapper>
                )
              })}
            </FooterSocial>
          </FooterContent>
        </FooterContainer>
      </FooterSection>
    </>
  )
}

const FooterSection = styled.section`
  width: 100%;
  height: auto;
`

const WaveContainer = styled.svg`
  margin: 0;
  position: relative;
  display: block;
`

const FooterContainer = styled.section`
  background: var(--sm-clr);
  height: 6rem;
  padding: 1rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

const FooterContent = styled.article`
  width: 100%;
  max-width: var(--mx-wdth);
  display: flex;
  justify-content: space-between;
`

const FooterWrapper = styled.aside`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
`

const FooterSocial = styled.div`
  display: flex;
  justify-content: flex-end;
`

const IconWrapper = styled.a`
  font-size: 1.5rem;
  color: var(--fnt-clr);
  margin-left: 0.75rem;

  &:hover {
    color: var(--bckgrnd-clr);
    cursor: pointer;
  }
`

const FooterLinks = styled.aside`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const FooterLink = styled(Link)`
  color: var(--fnt-clr);
  margin-right: 1rem;

  &:hover {
    color: var(--bckgrnd-clr);
  }
`

export default Footer

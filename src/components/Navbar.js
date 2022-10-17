import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import logo from "../assets/images/kodebi_normal.svg"
import logo_white from "../assets/images/kodebi_weiss.svg"
import { header } from "../utils/linksDB"
import { FaBook, FaBookOpen } from "react-icons/fa"
import { Button } from "@kodebi/libkodebi-ui"

const Navbar = () => {
  const [navbar, setNavbar] = useState(false)
  const [showLinks, setShowLinks] = useState(false)

  useEffect(() => {
    const stickyNav = () => {
      if (window.scrollY > 50) {
        setNavbar(true)
      } else {
        setNavbar(false)
      }
    }
    window.addEventListener("scroll", stickyNav)
    return () => {
      window.removeEventListener("scroll", stickyNav)
    }
  })

  const closeNavMenu = () => {
    setShowLinks(false)
  }

  return (
    <>
      <Nav navbar={navbar}>
        <NavContent>
          <NavHeader>
            <StyledLink to="/" onClick={closeNavMenu}>
              {navbar ? (
                <img src={logo} alt="logo-kodebi" width="80" height="80" />
              ) : (
                <img
                  src={logo_white}
                  alt="logo_weiss-kodebi"
                  width="80"
                  height="80"
                />
              )}
            </StyledLink>
            <BookIcon onClick={() => setShowLinks(!showLinks)}>
              {showLinks ? <FaBookOpen /> : <FaBook />}
            </BookIcon>
          </NavHeader>
          <NavMenu showLinks={showLinks}>
            <LinksContainer>
              {header.map(link => {
                return (
                  <Link
                    style={{
                      color: navbar ? "var(--fnt-clr)" : "var(--bckgrnd-clr)",
                      padding: "0.5rem",
                    }}
                    to={link.url}
                    key={link.id}
                    onClick={closeNavMenu}
                  >
                    <li>{link.text}</li>
                  </Link>
                )
              })}
            </LinksContainer>
            <a
              href="https://app.kodebi.de"
              style={{ margin: "0", padding: "0" }}
            >
              <Button
                variant="signin"
                type="button"
                margin="0"
                label="Signin / Login"
              />
            </a>
          </NavMenu>
        </NavContent>
      </Nav>
    </>
  )
}

const Nav = styled.nav`
  background: ${props => (props.navbar ? "var(--bckgrnd-clr)" : "transparent")};
  box-shadow: ${props => props.navbar && "var(--bx-shdw)"};
  position: fixed;
  transition: var(--trnstn);
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;

  &:before,
  &:after {
    content: "";
    display: block;
    flex: 1;
  }

  @media (min-width: 800px) {
    display: flex;
    justify-content: space-around;
    height: auto;
    flex: 0 0 auto;
  }
`

const NavContent = styled.header`
  @media (min-width: 800px) {
    display: flex;
    justify-content: space-around;
    max-width: var(--mx-wdth);
    width: 100%;
  }
`

const NavHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0.5rem;
`

const BookIcon = styled.span`
  display: flex;
  align-self: center;
  font-size: 1.5rem;
  padding: 0.25rem;
  border: 0;
  background: transparent;
  color: var(--brnd-clr);
  transition: var(--trnstn);
  cursor: pointer;

  @media (min-width: 800px) {
    display: none;
  }
`

const NavMenu = styled.div`
  text-align: start;
  font-size: 1rem;
  height: ${props => (props.showLinks ? "11rem" : "0")};
  padding: ${props => (props.showLinks ? "0 0.5rem" : "none")};
  overflow: hidden;
  transition: var(--trnstn);

  @media (min-width: 800px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: auto;
    flex: 1;
    margin-right: 0.5rem;
  }
`

const LinksContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 800px) {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    flex: 1;
    margin: 0 2rem;
  }
`

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
`

export default Navbar

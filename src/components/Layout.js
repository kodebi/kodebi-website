import React from "react"
import { Global, css } from "@emotion/react"
import "@fontsource/quicksand"
import "@fontsource/quicksand/400.css"
import "@fontsource/quicksand/700.css"
import Footer from "../components/Footer"

const Layout = ({ children }) => {
  return (
    <>
      <Global styles={GlobalStyle} />
      {children}
      <Footer />
    </>
  )
}

const GlobalStyle = css`
  :root {
    --fnt-clr: #260101;
    --fnt-sz: 0.875rem;
    --bckgrnd-clr: #f2ead0;
    --brnd-clr: #d96c75;
    --sm-clr: #d9c6ba;
    --clr-gry: #d6d6d6;
    --fnt-fmly: "Quicksand", sans-serif;
    --mn-shdw: 0 1px 5px rgba(0, 0, 0, 0.75);
    --bx-shdw: 1px 6px 6px -6px rgba(0, 0, 0, 0.75);
    --frm-shdw: 0px 4px 18px 8px rgba(0, 0, 0, 0.3);
    --lttr-spcng: 0.1rem;
    --trnstn: all 0.2s ease-out;
    --nvbr-trns: 0.5s ease-in-out;
    --brdr-rds: 0.25rem;
    --brdr-rds-2: 0.75rem;
    --brdr-rds-3: 25px;
    --mx-wdth: 1140px;
    --bckgrnd-trnsprnt-1: rgba(248, 248, 248, 0.6);
    --bckgrnd-trnsprnt-2: rgba(248, 248, 248, 0.75);
  }

  *,
  &:before,
  &:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    min-height: 100vh;
  }

  body {
    font-family: var(--fnt-fmly);
    background-color: var(--bckgrnd-clr);
    color: var(--fnt-clr);
    font-size: var(--fnt-sz);
    line-height: 1.5;
    text-align: center;
  }

  main {
    display: grid;
    place-items: center;
  }

  ul {
    list-style-type: none;
  }

  a {
    text-decoration: none;
    font-family: var(---fnt-fmly);
    font-size: var(--fnt-sz);
  }

  h1,
  h2,
  h3,
  h4 {
    letter-spacing: var(--lttr-spcng);
    line-height: 1.25;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 1.5rem;
  }

  h2 {
    font-size: 1.25rem;
  }

  h3 {
    font-size: 1rem;
  }

  h4 {
    font-size: var(---fnt-sz);
  }

  p {
    font-size: var(--fnt-sz);
    margin-bottom: 0.5rem;
  }

  button {
    font-family: var(--fnt-fmly);
    font-size: var(---fnt-sz);

    &:focus {
      outline: none;
    }
  }

  @media (min-width: 800px) {
    a {
      font-size: 1rem;
    }

    h1,
    h2,
    h3,
    h4 {
      margin-bottom: 2rem;
    }

    h1 {
      font-size: 3rem;
    }

    h2 {
      font-size: 2rem;
    }

    h3 {
      font-size: 1.5rem;
    }

    h4 {
      font-size: 1rem;
    }

    p {
      font-size: 1rem;
    }

    button {
      font-size: 1rem;
    }
  }
`

export default Layout

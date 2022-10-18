import React from "react"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import HowTo from "../components/HowTo"
import About from "../components/About"
import Benefits from "../components/Benefits"
import CallToAction from "../components/CallToAction"
import FooterContainer from "../components/FooterContainer"
import Seo from "../components/Seo"
import { AppShell } from "@kodebi/libkodebi-ui"
import Layout from "../components/Layout"
import "animate.css/animate.min.css"

const Home = () => {
  return (
    <AppShell>
      <Layout />
      <Seo />
      <Navbar />
      <Hero />
      <HowTo />
      <Benefits />
      <About />
      <CallToAction />
      <FooterContainer />
    </AppShell>
  )
}

export default Home

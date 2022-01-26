import React from "react"
import Layout from "../components/Layout"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import HowTo from "../components/HowTo"
import About from "../components/About"
import Benefits from "../components/Benefits"
import CallToAction from "../components/CallToAction"
import Seo from "../components/Seo"
import "animate.css/animate.min.css"

const Home = () => {
  return (
    <Layout>
      <Seo />
      <Navbar />
      <Hero />
      <HowTo />
      <Benefits />
      <About />
      <CallToAction />
    </Layout>
  )
}

export default Home

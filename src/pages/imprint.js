import React from "react"
import styled from "@emotion/styled"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import ImprintText from "../components/ImprintText"
import ReturnTo from "../components/ReturnTo"
import { AppShell } from "@kodebi/libkodebi-ui"
import FooterContainer from "../components/FooterContainer"

const Imprint = () => {
  return (
    <AppShell>
      <Layout />
      <Banner title="Impressum" />
      <ReturnTo title="zurück" />
      <Container>
        <ImprintText />
      </Container>
      <FooterContainer />
    </AppShell>
  )
}

const Container = styled.section`
  margin: auto 0.5rem;

  @media (min-width: 800px) {
    margin: auto 1rem;
  }
`

export default Imprint

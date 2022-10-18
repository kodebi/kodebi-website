import React from "react"
import styled from "@emotion/styled"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import FaqTab from "../components/FaqTab"
import ReturnTo from "../components/ReturnTo"
import { AppShell } from "@kodebi/libkodebi-ui"
import { faqDB } from "../utils/faqDB"
import FooterContainer from "../components/FooterContainer"

const Faq = () => {
  return (
    <>
      <AppShell>
        <Layout />
        <Banner title="FAQ" />
        <ReturnTo title="zurück" />
        <Container>
          {faqDB.map(article => {
            return <FaqTab key={article.id} {...article} />
          })}
        </Container>
        <FooterContainer />
      </AppShell>
    </>
  )
}

const Container = styled.section`
  margin: auto 0.5rem;

  @media (min-width: 800px) {
    margin: auto 1rem;
  }
`

export default Faq

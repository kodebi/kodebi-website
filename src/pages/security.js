import React from "react"
import styled from "@emotion/styled"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import ReturnTo from "../components/ReturnTo"
import DataSecurity from "../components/DataSecurity"

const Security = () => {
  return (
    <Layout>
      <Banner title="Datenschutz" />
      <ReturnTo title="zurück" />
      <Container>
        <DataSecurity />
      </Container>
    </Layout>
  )
}

const Container = styled.section`
  margin: auto 0.5rem;

  @media (min-width: 800px) {
    margin: auto 1rem;
  }
`

export default Security

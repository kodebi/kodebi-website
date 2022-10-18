import React from "react"
import { Link } from "gatsby"
import { Button } from "@kodebi/libkodebi-ui"

const ReturnTo = ({ title }) => {
  return (
    <>
      <Link to="/">
        <Button variant="filter">{title}</Button>
      </Link>
    </>
  )
}

export default ReturnTo

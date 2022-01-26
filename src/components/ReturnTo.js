import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const ReturnTo = ({ title }) => {
  return (
    <>
      <Link to="/">
        <RoundBtn>{title}</RoundBtn>
      </Link>
    </>
  )
}

const RoundBtn = styled.button`
  border: 2px solid var(--brnd-clr);
  border-radius: var(--brdr-rds-3);
  background-color: var(--bckgrnd-clr);
  color: var(--brnd-clr);
  text-transform: uppercase;
  cursor: pointer;
  padding: 0.5rem;
  margin: 2rem;
  transition: var(--trnstn);

  &:hover {
    color: var(--bckgrnd-clr);
    background-color: var(--brnd-clr);
  }
`

export default ReturnTo

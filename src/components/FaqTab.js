import React, { useState } from "react"
import styled from "@emotion/styled"
import { FaChevronRight } from "react-icons/fa"

const FaqTab = props => {
  const [toggleTab, setToggleTab] = useState(false)

  const handleToggle = () => {
    setToggleTab(!toggleTab)
  }

  return (
    <>
      <Box onClick={handleToggle}>
        <Heading>
          <IconWrapper toggleTab={toggleTab}>
            <FaChevronRight />
          </IconWrapper>
          <h4>{props.question}</h4>
        </Heading>
        {toggleTab && <Text>{props.answer}</Text>}
      </Box>
    </>
  )
}

const Box = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: var(--mx-wdth);
  margin: 1rem auto;
  padding: 1rem;
  box-shadow: var(--mn-shdw);
  border-radius: 1rem;
  cursor: pointer;
`

const Heading = styled.div`
  width: 100%;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;

  h4 {
    margin: 0 0 0 1rem;
    text-align: right;
  }
`

const IconWrapper = styled.span`
  display: grid;
  place-items: center;
  color: var(--brnd-clr);
  font-size: 1.5rem;
  transition: var(--trnstn);
  transform: ${props => props.toggleTab && "rotate(90deg)"};
`

const Text = styled.p`
  width: 100%;
  padding: 0.5rem;
  text-align: end;
  margin-bottom: 0;
`

export default FaqTab

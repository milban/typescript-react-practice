import React, { useState } from "react"
import { createGlobalStyle } from "styled-components"
import { reset } from "styled-reset"
import Number from "./Number"
import { Form, Input } from "./input"

const GlobalStyle = createGlobalStyle`
  ${reset}
`

const App: React.FC<{}> = () => {
  const [counter, setCounter] = useState(0)
  const [value, setValue] = useState("")
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value }
    } = event
    setValue(value)
  }
  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault()
  }
  const addCounter = (): void => {
    return setCounter(counter + 1)
  }
  return (
    <>
      <GlobalStyle />
      <Form onFormSubmit={onFormSubmit}>
        <Input value={value} onChange={onChange}></Input>
      </Form>
      <Number count={counter} />
      <button onClick={addCounter}>Add Cnt</button>
      <button onClick={() => setCounter(counter - 1)}>Minus Cnt</button>
    </>
  )
}

export default App

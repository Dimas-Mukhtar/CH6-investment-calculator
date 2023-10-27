import { useState } from "react"
import Calculator from "./components/Calculator"
import Header from "./components/Header"
import Result from "./components/Result"

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1500,
    expectedReturn: 5,
    duration: 10
  })

  const durationIsValid = userInput.duration > 0

  const onChangeHandler = (inputKey, newValue) => {
    setUserInput((existingUserInput) => {
      return {
        ...existingUserInput,
        [inputKey]: newValue
      }
    })
  }
  return (
    <>
      <Header />
      <Calculator onChangeProps={onChangeHandler} userInput={userInput} />
      {!durationIsValid && <p className="center">Masukkan durasi di atas nol!</p>}
      {durationIsValid && <Result userInput={userInput} />}
    </>
  )
}

export default App

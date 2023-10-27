import { useState } from "react"
import "./Calculator.css"

function Calculator({ userInput, onChangeProps }) {
  // const onSubmitForm = (e) => {
  //   e.preventDefault()
  //   console.log(userInput)
  // }
  return (
    <form id="user-input">
      <div className="input-group">
        <p>
          <label>Inisial Investasi</label>
          <input
            type="number"
            value={userInput.initialInvestment}
            onChange={(e) => onChangeProps("initialInvestment", e.target.value)}
          />
        </p>
        <p>
          <label>Investasi Tahunan</label>
          <input
            type="number"
            value={userInput.annualInvestment}
            onChange={(e) => onChangeProps("annualInvestment", e.target.value)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Perkiraan balik modal</label>
          <input
            type="number"
            value={userInput.expectedReturn}
            onChange={(e) => onChangeProps("expectedReturn", e.target.value)}
          />
        </p>
        <p>
          <label>Durasi/bulan</label>
          <input
            type="number"
            value={userInput.duration}
            onChange={(e) => onChangeProps("duration", e.target.value)}
          />
        </p>
      </div>
      {/* <button type="submit">Submit</button> */}
    </form>
  )
}

export default Calculator

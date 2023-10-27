import { calculateInvestmentResults, formatter } from "../util/investment"
import "./Result.css"

function Result({ userInput }) {
  const generate = calculateInvestmentResults(userInput)
  const initialInvestment =
    generate[0].valueEndOfYear - generate[0].interest - generate[0].annualInvestment
  console.log(generate)
  return (
    <table id="result">
      <thead>
        <tr className="center">
          <th>Tahun</th>
          <th>Nilai Investasi</th>
          <th>Bunga(Tahunan)</th>
          <th>Total Bunga</th>
          <th>Investasi Kapital</th>
        </tr>
      </thead>
      <tbody>
        {generate.map((data) => {
          const totalInterest =
            data.valueEndOfYear - data.annualInvestment * data.year - initialInvestment

          const totalAmountInvested = data.valueEndOfYear - totalInterest
          return (
            <tr className="center" key={data.year}>
              <td>{formatter.format(data.year)}</td>
              <td>{formatter.format(data.valueEndOfYear)}</td>
              <td>{formatter.format(data.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Result

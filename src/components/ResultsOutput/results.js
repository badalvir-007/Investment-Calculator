
const fromatter =  new Intl.NumberFormat('en-US' , {
  style: 'currency',
  currency:  'USD',
  minimumFractionDigits:2,
  maximumFractionDigits : 2,
})
;

const Results = (props) => {

    return (
        <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          { props.data.map( (yearData) => (
            <tr key={yearData.year}>
            <td>{fromatter.format(yearData.year)}</td>
            <td>{fromatter.format(yearData.savingsEndOfYear)}</td>
            <td>{fromatter.format(yearData.yearlyInterest)}</td>
            <td>{fromatter.format(yearData.savingsEndOfYear - props.initialInvestment -
            yearData.yearlyContribution * yearData.year)
            }</td>
            <td>{fromatter.format(props.initialInvestment + yearData.yearlyContribution * yearData.year)}</td>
          </tr>
          ))}
        </tbody>
      </table>
    )
};

export default Results;
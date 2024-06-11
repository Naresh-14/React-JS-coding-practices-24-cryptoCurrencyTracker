import './index.css'

const CryptocurrencyItem = props => {
  const {cryptocurrencyList} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = cryptocurrencyList

  return (
    <li className="list-items-container">
      <div className="table-currency-card">
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />
        <p className="table-currency">{currencyName}</p>
      </div>
      <div className="sub-table">
        <p className="table-currency currency-usd">{usdValue}</p>
        <p className="table-currency">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem

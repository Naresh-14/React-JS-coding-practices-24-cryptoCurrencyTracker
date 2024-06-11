import {Component} from 'react'
import Loader from 'react-loader-spinner'

import CryptocurrencyItem from '../CryptocurrencyItem'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {
    cryptocurrencyList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getCryptoCurrencyListData()
  }

  getCryptoCurrencyListData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(eachItem => ({
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      currencyLogo: eachItem.currency_logo,
      id: eachItem.id,
    }))
    this.setState({cryptocurrencyList: updatedData, isLoading: false})
  }

  render() {
    const {cryptocurrencyList, isLoading} = this.state
    return (
      <div className="crypto-list-container">
        <h1 className="crypto-list-name">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="crypto-list-img"
        />
        <div className="table-container">
          <div className="tables-container">
            <p className="table-currency">Coin Type</p>
            <div className="sub-table">
              <p className="table-currency currency-usd">USD</p>
              <p className="table-currency">EURO</p>
            </div>
          </div>
          <ul className="list-item-container">
            {isLoading ? (
              <div data-testid="loader">
                <Loader type="Rings" color="#ffffff" height={80} width={80} />
              </div>
            ) : (
              cryptocurrencyList.map(eachItem => (
                <CryptocurrencyItem
                  cryptocurrencyList={eachItem}
                  key={eachItem.id}
                />
              ))
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList

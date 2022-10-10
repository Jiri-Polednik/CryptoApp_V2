import React, { useContext } from 'react'
import Banner from './Banner'
import CoinsTable from './CoinsTable'
import { useCoins } from '../../Shared/Helpers/api'
import { Currency } from '../../Shared/Contexts/CurrencyContext'

function Homepage() {
  const { currency } = useContext(Currency)

  const { coins, coinsIsLoading } = useCoins(currency)

  if (coinsIsLoading) {
    return <p>Loading!</p>
  }

  return (
    <>
      <Banner cryptos={coins.slice(0, 9)} />
      <CoinsTable cryptos={coins} />
    </>
  )
}

export default Homepage

import React, { useContext } from 'react'
import { CircularProgress } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Banner from './Banner'
import CoinsTable from './CoinsTable'
import { useCoins } from '../../Shared/Helpers/api'
import { Currency } from '../../Shared/Contexts/CurrencyContext'

function Homepage() {
  const { currency } = useContext(Currency)
  const { coins, coinsIsError, coinsIsLoading } = useCoins(currency)
  const navigate = useNavigate()

  if (coinsIsLoading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          width: '100vw',
        }}
      >
        <CircularProgress />
      </div>
    )
  }

  const validCoins = coins.filter((coin) => coin.RAW && coin.RAW[currency] !== undefined)

  if (coinsIsError) {
    return navigate('/error')
  }

  return (
    <>
      <Banner cryptos={validCoins.slice(0, 9)} />
      <CoinsTable cryptos={coins} />
    </>
  )
}

export default Homepage

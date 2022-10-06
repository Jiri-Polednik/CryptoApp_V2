import React, { useContext } from 'react'
import { useQuery } from 'react-query'
import Banner from './Banner'
import CoinsTable from './CoinsTable'
import api from '../../Shared/Helpers/api'
import { Crypto } from '../../Shared/CryptoContext'

function Homepage() {
  const { currency } = useContext(Crypto)
  const { data, error, isLoading } = useQuery(`coins${currency}`, () =>
    api.get(`/top/totalvolfull?limit=100&tsym=${currency}`)
  )
  const cryptos = data?.data?.Data

  if (isLoading) {
    return <p>Loading!</p>
  }

  return (
    <>
      <Banner cryptos={cryptos.slice(0, 9)} />
      <CoinsTable cryptos={cryptos} />
    </>
  )
}

export default Homepage

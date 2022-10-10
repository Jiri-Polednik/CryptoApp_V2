import axios from 'axios'
import { useQuery } from 'react-query'

export const api = axios.create({
  baseURL: 'https://min-api.cryptocompare.com/data/',
  authorization: { Apikey: import.meta.env.VITE_API_KEY },
})

export const useCoinHistory = (id, currency) => {
  const { data, error, isLoading } = useQuery(`coin${id}${currency}`, () =>
    api.get(`/v2/histoday?fsym=${id}&tsym=${currency}&limit=365`)
  )

  const coinHistory = data?.data?.Data?.Data
  return { coinHistory, coinHistoryIsLoading: isLoading }
}

export const useCoinInfo = (id, currency) => {
  const { data, error, isLoading } = useQuery(`coins${currency}`, () =>
    api.get(`/top/totalvolfull?limit=100&tsym=${currency}`)
  )

  let coinInfo = data?.data?.Data.find((item) => item.CoinInfo.Name === id)
  coinInfo = coinInfo?.CoinInfo
  return { coinInfo, coinInfoIsLoading: isLoading }
}

export const useCoins = (currency) => {
  const { data, error, isLoading } = useQuery(`coins${currency}`, () =>
    api.get(`/top/totalvolfull?limit=100&tsym=${currency}`)
  )
  const coins = data?.data?.Data

  return { coins, coinsIsLoading: isLoading }
}

export const useCoinFullInfo = (id, currency) => {
  const { data, error, isLoading } = useQuery(`coins${currency}`, () =>
    api.get(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${id}&tsyms=${currency}`)
  )
  let coinFullInfo = data?.data?.Data.find((item) => item.CoinInfo.Name === id)
  coinFullInfo = coinFullInfo?.DISPLAY[currency]

  return { coinFullInfo, coinFullInfoIsLoading: isLoading }
}

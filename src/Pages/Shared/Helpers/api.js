import axios from 'axios'
import { useQuery } from 'react-query'

export const api = axios.create({
  baseURL: 'https://min-api.cryptocompare.com/data/',
  authorization: { Apikey: import.meta.env.VITE_API_KEY },
})

export const useCoinHistory = (id, currency) => {
  const { data, isError, isLoading } = useQuery(`coin${id}${currency}`, () =>
    api.get(`/v2/histoday?fsym=${id}&tsym=${currency}&limit=365`)
  )
  const coinHistoryIsError = data?.data?.Response === 'Error' || isError
  const coinHistory = data?.data?.Data?.Data
  return { coinHistory, coinHistoryIsError, coinHistoryIsLoading: isLoading }
}

export const useCoinInfo = (id, currency) => {
  const { data, isError, isLoading } = useQuery(`coins${currency}`, () =>
    api.get(`/top/totalvolfull?limit=100&tsym=${currency}`)
  )

  let coinInfo = data?.data?.Data.find((item) => item.CoinInfo.Name === id)
  coinInfo = coinInfo?.CoinInfo

  const coinInfoIsError = data?.data?.Response === 'Error' || isError || (coinInfo === undefined && isLoading === false)
  return { coinInfo, coinInfoIsError, coinInfoIsLoading: isLoading }
}

export const useCoins = (currency) => {
  const { data, isError, isLoading } = useQuery(`coins${currency}`, () =>
    api.get(`/top/totalvolfull?limit=100&tsym=${currency}`)
  )
  const coins = data?.data?.Data
  const coinsIsError = data?.data?.Response === 'Error' || isError

  return { coins, coinsIsError, coinsIsLoading: isLoading }
}

export const useCoinFullInfo = (id, currency) => {
  const { data, isError, isLoading } = useQuery(`coins${currency}`, () =>
    api.get(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${id}&tsyms=${currency}`)
  )
  let coinFullInfo = data?.data?.Data.find((item) => item.CoinInfo.Name === id)
  coinFullInfo = coinFullInfo?.DISPLAY[currency]

  const coinFullInfoIsError = data?.data?.Response === 'Error' || isError
  return { coinFullInfo, coinFullInfoIsError, coinFullInfoIsLoading: isLoading }
}

import React, { useContext } from 'react'
import { CircularProgress, Container, styled, useTheme } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useCoinHistory } from '../../Shared/Helpers/api'
import { Currency } from '../../Shared/Contexts/CurrencyContext'
import Chart from './Chart'

function CoinChart(props) {
  const theme = useTheme()
  const { id } = props
  const { currency } = useContext(Currency)
  const { coinHistory, coinHistoryIsError, coinHistoryIsLoading } = useCoinHistory(id, currency)
  const navigate = useNavigate()

  const ChartContainer = styled(Container)({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    padding: 40,
    [theme.breakpoints.down('md')]: {
      marginTop: 0,
      padding: 10,
      paddingTop: 0,
    },
  })

  if (coinHistoryIsLoading) {
    return (
      <ChartContainer>
        <CircularProgress />
      </ChartContainer>
    )
  }
  if (coinHistoryIsError) {
    return navigate('/error')
  }

  if (!(coinHistoryIsLoading && coinHistoryIsError))
    return (
      <ChartContainer>
        <Chart coinHistory={coinHistory} />
      </ChartContainer>
    )
}

export default CoinChart

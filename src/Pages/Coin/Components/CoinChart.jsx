import React, { useContext } from 'react'
import { Container, styled, useTheme } from '@mui/material'
import { useCoinHistory } from '../../Shared/Helpers/api'
import { Currency } from '../../Shared/Contexts/CurrencyContext'
import Chart from './Chart'

function CoinChart(props) {
  const theme = useTheme()
  const { id } = props
  const { currency } = useContext(Currency)
  const { coinHistory, coinHistoryIsLoading } = useCoinHistory(id, currency)

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
    return <p>Loading!</p>
  }

  return (
    <ChartContainer>
      <Chart coinHistory={coinHistory} />
    </ChartContainer>
  )
}

export default CoinChart
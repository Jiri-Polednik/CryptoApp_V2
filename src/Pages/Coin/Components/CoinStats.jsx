import React, { useContext } from 'react'
import { CircularProgress, Container, styled, Typography, useTheme } from '@mui/material'
import { Currency } from '../../Shared/Contexts/CurrencyContext'
import { useCoinFullInfo, useCoinInfo } from '../../Shared/Helpers/api'

function CoinStats(props) {
  const { id } = props
  const { currency } = useContext(Currency)
  const theme = useTheme()
  const { coinInfo, coinInfoIsLoading } = useCoinInfo(id, currency)
  const { coinFullInfo, coinFullInfoIsLoading } = useCoinFullInfo(id, currency)

  const Sidebar = styled(Container)({
    width: '50%',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 25,
    borderRight: '2px solid grey',
  })

  if (coinInfoIsLoading || coinFullInfoIsLoading) {
    return (
      <Sidebar>
        <CircularProgress />
      </Sidebar>
    )
  }
  const { PRICE: price, CHANGEPCT24HOUR: change, MKTCAP: marketCap, VOLUME24HOURTO: volume24hTo } = coinFullInfo

  return (
    <Sidebar>
      <img src={`https://www.cryptocompare.com${coinInfo.ImageUrl}`} height={240} alt={`${coinInfo.FullName} Logo`} />
      <Typography variant='h3'>{coinInfo.FullName}</Typography>
      <Typography variant='h6'>Price: {price}</Typography>
      <Typography variant='h6'>Market Cap: {marketCap}</Typography>
      <Typography variant='h6'>Traded (24h): {volume24hTo}</Typography>

      <Typography
        variant='h4'
        sx={{
          color: change > 0.0 ? 'rgb(14, 203, 129)' : 'red',
          fontWeight: 500,
        }}
      >
        {change !== undefined ? `${Math.round(change * 100) / 100}%` : 'No Data'}
      </Typography>
    </Sidebar>
  )
}

export default CoinStats

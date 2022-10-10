import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Typography } from '@mui/material'
import { Currency } from '../../Shared/Contexts/CurrencyContext'

function CarouselItem(props) {
  const { item } = props
  const { currency } = useContext(Currency)
  const change = item.RAW[currency].CHANGEPCT24HOUR

  return (
    <Link to={`/coins/${item?.CoinInfo?.Name}`}>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <img
          src={`https://www.cryptocompare.com${item?.CoinInfo?.ImageUrl}`}
          alt={item.name}
          height='80'
          style={{ marginBottom: 10 }}
        />
      </div>
      <Typography align='center' variant='h3'>
        {item?.CoinInfo?.FullName}
      </Typography>
      <Typography variant='h5' align='center'>
        {Math.round(change * 100) / 100}%
      </Typography>
    </Link>
  )
}

export default CarouselItem

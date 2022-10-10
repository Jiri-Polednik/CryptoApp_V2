import React, { useContext } from 'react'
import { TableCell, TableRow } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { Currency } from '../../Shared/Contexts/CurrencyContext'

function TableBodyContent(props) {
  const { currency } = useContext(Currency)
  const { cryptosPage } = props
  const navigate = useNavigate()

  return cryptosPage.map((crypto) => {
    const profit = crypto?.RAW ? crypto.RAW[currency].CHANGEPCT24HOUR > 0 : 'No Data'
    return (
      <TableRow
        sx={{ cursor: 'pointer' }}
        onClick={() => navigate(`/coins/${crypto?.CoinInfo?.Name}`)}
        key={crypto?.CoinInfo?.Name}
      >
        <TableCell
          component='th'
          scope='row'
          sx={{
            display: 'flex',
            gap: 15,
          }}
        >
          <img
            src={`https://www.cryptocompare.com${crypto?.CoinInfo?.ImageUrl}`}
            alt={crypto.name}
            height='50'
            style={{ marginBottom: 10 }}
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                textTransform: 'uppercase',
                fontSize: 22,
              }}
            >
              {crypto?.CoinInfo?.FullName}
            </span>
            <span style={{ color: 'darkgrey' }}>{crypto.CoinInfo.FullName}</span>
          </div>
        </TableCell>
        <TableCell align='right'>{crypto?.DISPLAY ? `${crypto.DISPLAY[currency].PRICE}` : 'No Data'}</TableCell>
        <TableCell
          align='right'
          sx={{
            color: profit > 0.0 ? 'rgb(14, 203, 129)' : 'red',
            fontWeight: 500,
          }}
        >
          {crypto?.RAW ? `${Math.round(crypto.RAW[currency].CHANGEPCT24HOUR * 100) / 100}%` : 'No Data'}
        </TableCell>
        <TableCell align='right'>{crypto.DISPLAY ? crypto.DISPLAY[currency].MKTCAP : 'No Data'}</TableCell>
      </TableRow>
    )
  })
}

export default TableBodyContent

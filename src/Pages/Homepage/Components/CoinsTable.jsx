import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  Pagination,
} from '@mui/material'
import { Currency } from '../../Shared/Contexts/CurrencyContext'

function CoinsTable(props) {
  const navigate = useNavigate()
  const { cryptos } = props
  const [searchParam, setSearchParam] = useState('')
  const [page, setPage] = useState(1)
  const { currency } = useContext(Currency)

  const handleSearch = () =>
    cryptos.filter(
      (crypto) =>
        crypto.CoinInfo.Name.toLowerCase().includes(searchParam) ||
        crypto.CoinInfo.FullName.toLowerCase().includes(searchParam)
    )

  const cryptosPage = handleSearch().slice((page - 1) * 10, page * 10)

  return (
    <Container sx={{ textAlign: 'center' }}>
      <Typography variant='h4' sx={{ margin: 5 }}>
        Cryptocurrencies Ordered by Market Cap
      </Typography>
      <TextField
        label='Search For a Cryptocurrency...'
        variant='standard'
        sx={{ marginBottom: 5, width: '100%' }}
        value={searchParam}
        onChange={(event) => setSearchParam(event.target.value)}
      />
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              {['Coin', 'Price', '24h Change', 'Market Cap'].map((header) => (
                <TableCell sx={{ fontWeight: '600' }} key={header} align={header === 'Coin' ? 'left' : 'right'}>
                  <p>{header}</p>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {cryptosPage.map((crypto) => {
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
                    style={{
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
                  <TableCell align='right'>
                    {crypto?.DISPLAY ? `${crypto.DISPLAY[currency].PRICE}` : 'No Data'}
                  </TableCell>
                  <TableCell
                    align='right'
                    style={{
                      color: profit > 0.0 ? 'rgb(14, 203, 129)' : 'red',
                      fontWeight: 500,
                    }}
                  >
                    {crypto?.RAW ? `${Math.round(crypto.RAW[currency].CHANGEPCT24HOUR * 100) / 100}%` : 'No Data'}
                  </TableCell>
                  <TableCell align='right'>{crypto.DISPLAY ? crypto.DISPLAY[currency].MKTCAP : 'No Data'}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        sx={{ paddingTop: 10, width: '100%', display: 'flex', justifyContent: 'center' }}
        count={handleSearch() ? +(handleSearch().length / 10).toFixed(0) : 1}
        onChange={(event) => {
          setPage(event.target.textContent)
        }}
      />
    </Container>
  )
}

export default CoinsTable

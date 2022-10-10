import React, { useState } from 'react'
import {
  Container,
  Table,
  TableContainer,
  TextField,
  Typography,
  Pagination,
  TableHead,
  TableBody,
} from '@mui/material'
import TableHeadContent from './TableHeadContent'
import TableBodyContent from './TableBodyContent'

function CoinsTable(props) {
  const { cryptos } = props
  const [searchParam, setSearchParam] = useState('')
  const [page, setPage] = useState(1)

  const handleSearch = () =>
    cryptos.filter(
      (crypto) =>
        crypto.CoinInfo.Name.toLowerCase().includes(searchParam) ||
        crypto.CoinInfo.FullName.toLowerCase().includes(searchParam)
    )
  const handlePageChange = (event, value) => {
    setPage(value)
  }

  const cryptosPage = handleSearch().slice((page - 1) * 10, page * 10)

  return (
    <Container sx={{ textAlign: 'center', marginBottom: 3 }}>
      <Typography variant='h4' sx={{ marginTop: 5 }}>
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
            <TableHeadContent />
          </TableHead>
          <TableBody>
            <TableBodyContent cryptosPage={cryptosPage} />
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        sx={{ paddingTop: 3, width: '100%', display: 'flex', justifyContent: 'center' }}
        count={handleSearch() ? +(handleSearch().length / 10).toFixed(0) : 1}
        onChange={(event, value) => {
          handlePageChange(event, value)
        }}
      />
    </Container>
  )
}

export default CoinsTable

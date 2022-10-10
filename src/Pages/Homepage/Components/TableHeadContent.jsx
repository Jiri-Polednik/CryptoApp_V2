import React from 'react'
import { TableCell, TableRow } from '@mui/material'

function TableHeadContent() {
  return (
    <TableRow>
      {['Coin', 'Price', '24h Change', 'Market Cap'].map((header) => (
        <TableCell sx={{ fontWeight: '600' }} key={header} align={header === 'Coin' ? 'left' : 'right'}>
          {header}
        </TableCell>
      ))}
    </TableRow>
  )
}

export default TableHeadContent

import React from 'react'
import { TableCell, TableRow } from '@mui/material'

function TableHeadContent() {
  return (
    <TableRow>
      {['Symbol', 'Name', 'Price', '24h Change', 'Market Cap'].map((header) => (
        <TableCell
          sx={{ fontWeight: '600' }}
          key={header}
          align={header === 'Symbol' || header === 'Name' ? 'left' : 'right'}
        >
          {header}
        </TableCell>
      ))}
    </TableRow>
  )
}

export default TableHeadContent

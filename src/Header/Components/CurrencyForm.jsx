import React, { useContext } from 'react'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { Currency } from '../../Pages/Shared/Contexts/CurrencyContext'

function CurrencyForm() {
  const { currency, setCurrency } = useContext(Currency)
  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value)
  }

  return (
    <FormControl sx={{ width: 100 }}>
      <InputLabel id='demo-simple-select-helper-label'>Currency</InputLabel>
      <Select value={currency} label='Currency' variant='outlined' onChange={handleCurrencyChange}>
        <MenuItem value='USD'>USD</MenuItem>
        <MenuItem value='CZK'>CZK</MenuItem>
        <MenuItem value='EUR'>EUR</MenuItem>
      </Select>
    </FormControl>
  )
}

export default CurrencyForm

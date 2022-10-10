import React, { useContext } from 'react'
import { AppBar, Container, FormControl, InputLabel, MenuItem, Select, Toolbar, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { Currency } from './Contexts/CurrencyContext'

function Header() {
  const { currency, setCurrency } = useContext(Currency)
  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value)
  }

  const navigate = useNavigate()
  const navigateToHome = () => {
    navigate('/')
  }

  return (
    <AppBar color='transparent' position='static'>
      <Container sx={{ minWidth: '100vw', height: 80, display: 'flex', margin: 0, padding: 0 }}>
        <Toolbar sx={{ alignSelf: 'center', width: '100%' }}>
          <Typography sx={{ flex: 1, cursor: 'pointer', fontWeight: 'bold', margin: 'auto' }} onClick={navigateToHome}>
            Crypto App V2
          </Typography>
          <FormControl sx={{ width: 100 }}>
            <InputLabel id='demo-simple-select-helper-label'>Currency</InputLabel>
            <Select value={currency} label='Currency' variant='outlined' onChange={handleCurrencyChange}>
              <MenuItem value='USD'>USD</MenuItem>
              <MenuItem value='CZK'>CZK</MenuItem>
              <MenuItem value='EUR'>EUR</MenuItem>
            </Select>
          </FormControl>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header

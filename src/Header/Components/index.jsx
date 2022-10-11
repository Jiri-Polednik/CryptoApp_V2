import React from 'react'
import { AppBar, Container, Toolbar, Typography, useTheme } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import CurrencyForm from './CurrencyForm'

function Header(props) {
  const theme = useTheme()
  const { toggleTheme } = props

  const navigate = useNavigate()
  const navigateToHome = () => {
    navigate('/')
  }

  return (
    <AppBar position='static' color='transparent'>
      <Container sx={{ minWidth: '100%', height: 80, display: 'flex', margin: 0, padding: 0 }}>
        <Toolbar sx={{ alignSelf: 'center', width: '100%' }}>
          <Typography
            sx={{
              flex: 1,
              cursor: 'pointer',
              fontWeight: 'bold',
              margin: 'auto',
              color: theme.palette.primary.main,
            }}
            onClick={navigateToHome}
          >
            Crypto App V2
          </Typography>
          <CurrencyForm />
          <ThemeToggle toggleTheme={toggleTheme} />
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header

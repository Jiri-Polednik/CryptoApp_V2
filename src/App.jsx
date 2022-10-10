import React, { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material'
import { ReactQueryDevtools } from 'react-query/devtools'
import Header from './Header/Components/index'
import Homepage from './Pages/Homepage/Components/index'
import CoinPage from './Pages/Coin/Components/index'
import lightTheme from './Pages/Shared/Themes/lightTheme'
import darkTheme from './Pages/Shared/Themes/darkTheme'
import CurrencyContext from './Pages/Shared/Contexts/CurrencyContext'

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const [theme, setTheme] = useState(prefersDarkMode ? 'dark' : 'light')

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <CurrencyContext>
        <BrowserRouter>
          <CssBaseline />
          <Header toggleTheme={toggleTheme} />
          <Routes>
            <Route path='/' element={<Homepage />} exact />
            <Route element={<CoinPage />} path='/coins/:id' />
          </Routes>
          <ReactQueryDevtools initialIsOpen={false} />
        </BrowserRouter>
      </CurrencyContext>
    </ThemeProvider>
  )
}

export default App

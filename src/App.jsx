import React, { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { ReactQueryDevtools } from 'react-query/devtools'
import Header from './Header/Components/index'
import Homepage from './Pages/Homepage/Components/index'
import CoinPage from './Pages/Coin/Components/index'
import lightTheme from './Pages/Shared/Themes/lightTheme'
import darkTheme from './Pages/Shared/Themes/darkTheme'
import CurrencyContext from './Pages/Shared/Contexts/CurrencyContext'

function App() {
  const [theme, setTheme] = useState('light')

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
          <div
            style={{
              minHeight: '100vh',
              minWidth: '100vw',
            }}
          >
            <Header toggleTheme={toggleTheme} />
            <Routes>
              <Route path='/' element={<Homepage />} exact />
              <Route element={<CoinPage />} path='/coins/:id' />
            </Routes>
          </div>
          <ReactQueryDevtools initialIsOpen={false} />
        </BrowserRouter>
      </CurrencyContext>
    </ThemeProvider>
  )
}

export default App

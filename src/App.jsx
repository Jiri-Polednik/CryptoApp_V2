import React, { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import { ReactQueryDevtools } from 'react-query/devtools'
import Header from './Pages/Shared/Header'
import Homepage from './Pages/Homepage/Components/index'
import CoinPage from './Pages/Coin/Components/index'
import lightTheme from './Pages/Shared/Themes/lightTheme'
import darkTheme from './Pages/Shared/Themes/darkTheme'
import CryptoContext from './Pages/Shared/CryptoContext'

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
      <CryptoContext>
        <BrowserRouter>
          <div style={{ backgroundColor: '#fff', color: 'white', minHeight: '100vh', minWidth: '100vw' }}>
            <Header />
            <Routes>
              <Route path='/' element={<Homepage />} exact />
              <Route element={<CoinPage />} path='/coins/:id' />
            </Routes>
          </div>
          <ReactQueryDevtools initialIsOpen={false} />
        </BrowserRouter>
      </CryptoContext>
    </ThemeProvider>
  )
}

export default App

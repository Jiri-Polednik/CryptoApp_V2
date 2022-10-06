import React, { createContext, useEffect, useMemo, useState } from 'react'

export const Crypto = createContext(null)

function CryptoContext({ children }) {
  const [currency, setCurrency] = useState('EUR')
  const [symbol, setSymbol] = useState('€')

  useEffect(() => {
    if (currency === 'EUR') setSymbol('€')
    else if (currency === 'USD') setSymbol('$')
    else if (currency === 'CZK') setSymbol('Kč')
  }, [currency])

  const value = useMemo(
    () => ({
      symbol,
      currency,
      setCurrency,
    }),
    [currency]
  )

  return <Crypto.Provider value={value}>{children}</Crypto.Provider>
}

export default CryptoContext

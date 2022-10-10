import React, { createContext, useEffect, useMemo, useState } from 'react'

export const Currency = createContext(null)

function CurrencyContext({ children }) {
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

  return <Currency.Provider value={value}>{children}</Currency.Provider>
}

export default CurrencyContext

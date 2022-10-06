import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { Container, styled, useTheme } from '@mui/material'
import { Crypto } from '../../Shared/CryptoContext'
import api from '../../Shared/Helpers/api'
import CoinInfo from './CoinInfo'

function CoinPage() {
  const theme = useTheme()
  const { id } = useParams()
  const { currency } = useContext(Crypto)

  const { data, error, isLoading } = useQuery(`coin${id}${currency}`, () =>
    api.get(`/v2/histoday?fsym=${id}&tsym=${currency}&limit=365`)
  )
  const {
    dataCurrent = data,
    errorCurrent = error,
    isLoadingCurrent = isLoading,
  } = useQuery(`coin${id}${currency}Current`, () => api.get(`/pricemultifull?fsyms=${id}&tsyms=${currency}`))
  const coinHistory = data?.data?.Data?.Data
  const coinCurrent = dataCurrent?.data
  console.log(coinCurrent)

  const ContainerDiv = styled('div')({
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  })
  const Sidebar = styled(Container)({
    width: '30%',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 25,
    borderRight: '2px solid grey',
  })

  if (isLoading || isLoadingCurrent) {
    return <p>Loading!</p>
  }
  return (
    <ContainerDiv>
      <Sidebar>Sidebar</Sidebar>
      <Container>
        <CoinInfo coinHistory={coinHistory} />
      </Container>
    </ContainerDiv>
  )
}

export default CoinPage

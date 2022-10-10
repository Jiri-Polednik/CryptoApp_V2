import React from 'react'
import { useParams } from 'react-router-dom'
import { Container, styled, useTheme } from '@mui/material'
import CoinStats from './CoinStats'
import CoinChart from './CoinChart'

function CoinPage() {
  const theme = useTheme()
  const { id } = useParams()

  const ContainerDiv = styled('div')({
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  })

  return (
    <ContainerDiv>
      <CoinStats id={id} />
      <Container>
        <CoinChart id={id} />
      </Container>
    </ContainerDiv>
  )
}

export default CoinPage

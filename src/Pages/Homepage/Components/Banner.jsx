import React from 'react'
import { Container, styled, Typography, useTheme } from '@mui/material'
import Carousel from 'react-material-ui-carousel'
import CarouselItem from './CarouselItem'

const BannerDiv = styled('div')({
  backgroundSize: 'cover',
  backgroundPosition: 'center',
})

const BannerContainer = styled(Container)({
  padding: 15,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
})

function Banner(props) {
  const theme = useTheme()
  const { cryptos } = props

  return (
    <BannerDiv
      sx={{
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'url(../../../../banner_background_light.webp)'
            : 'url(../../../../banner_background_dark.webp)',
      }}
    >
      <BannerContainer>
        <Typography variant='h2' sx={{ textAlign: 'center', fontWeight: 'bold', marginBottom: 5 }}>
          Crypto App V2
        </Typography>
        <Typography variant='subtitle2' sx={{ textAlign: 'center', textTransform: 'capitalize', marginBottom: 5 }}>
          All your crypto currencies at one place!
        </Typography>
        <div style={{ width: 360, display: 'block', marginLeft: 'auto', marginRight: 'auto' }}>
          <Carousel>
            {cryptos?.map((item) => (
              <CarouselItem item={item} key={item} />
            ))}
          </Carousel>
        </div>
      </BannerContainer>
    </BannerDiv>
  )
}

export default Banner

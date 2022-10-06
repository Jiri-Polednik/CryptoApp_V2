import React from 'react'
import { Container, styled, Typography } from '@mui/material'
import Carousel from 'react-material-ui-carousel'
import CarouselItem from './CarouselItem'

const BannerDiv = styled('div')({
  backgroundImage: 'url(../../../../images/banner_background_dark.webp)',
  backgroundSize: 'cover',
})

const BannerContainer = styled(Container)({
  padding: 15,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
})

function Banner(props) {
  const { cryptos } = props

  return (
    <BannerDiv>
      <BannerContainer>
        <Typography variant='h2' sx={{ textAlign: 'center', fontWeight: 'bold', marginBottom: 5 }}>
          Crypto App V2
        </Typography>
        <Typography
          variant='subtitle2'
          sx={{ textAlign: 'center', color: 'darkgrey', textTransform: 'capitalize', marginBottom: 5 }}
        >
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

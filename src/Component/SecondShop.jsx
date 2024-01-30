import React from 'react'
import { Typography,Container, Grid } from '@mui/material';
import {Carousel} from 'react-bootstrap'
import image1 from './zay-shop-image/brand_01.png'
import image2 from './zay-shop-image/brand_02.png'
import image3 from './zay-shop-image/brand_03.png'
import image4 from './zay-shop-image/brand_04.png'

const SecondShop = () => {
    return (
      <div>
          <Container sx={{padding: '40px 20px',display: 'flex', flexDirection : 'column',justifyContent: 'center', alignItems: 'center'}}>
              <Typography sx={{fontSize: '45px', fontWeight: '500',marginTop : '20px'}}>Our Brands</Typography>
              <Typography sx={{fontSize: '18px', textAlign: 'center',marginTop: '20px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet.</Typography>
              <Grid container md={9} sx={{display: 'flex', justifyContent: 'space-between', marginTop: '50px', width: '100%'}}>
                  <Carousel>
      <Carousel.Item className= "d-flex justify-content-around" >
        <img className='imgs' src={image1} alt=""/>
        <img className='imgs' src={image2} alt=""/>
        <img className='imgs' src={image3} alt=""/>
        <img className='imgs' src={image4} alt=""/>
      </Carousel.Item>

      <Carousel.Item className= "d-flex justify-content-around">
        <img className='imgs' src={image1} alt=""/>
        <img className='imgs' src={image2} alt=""/>
        <img className='imgs' src={image3} alt=""/>
        <img className='imgs' src={image4} alt=""/>
      </Carousel.Item>
       
      <Carousel.Item className= "d-flex justify-content-around">
      <img className='imgs' src={image1} alt=""/>
        <img className='imgs' src={image2} alt=""/>
        <img className='imgs' src={image3} alt=""/>
        <img className='imgs' src={image4} alt=""/>
      </Carousel.Item>
    </Carousel>
              </Grid>
          </Container>
  
      </div>
    )
  }
  
  export default SecondShop
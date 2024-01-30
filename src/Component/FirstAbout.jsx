import React from 'react';
import {Container,Grid,Typography} from '@mui/material';

const FirstAbout = () => {
  return (
    <div sx={{padding: '0px'}}>
        <Container maxWidth="xl" sx={{ width: '100%', padding: '30px',backgroundColor: 'rgb(89,171,110)'}} className="main"  >
            <Grid container spacing={2} sx={{color: 'white',display:'flex', alignItems: 'center'}}>
                <Grid item sm={7}>
                <Typography sx={{fontSize: '40px'}}>About Us</Typography>
                <Typography sx={{fontSize: '20px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
                </Grid>
                <Grid item sm={5}>
                
                <img style={{width:"100%"}} src="https://themewagon.github.io/zay-shop/assets/img/about-hero.svg" alt="" />

                </Grid>

            </Grid>
        </Container>
        

    </div>
  )
}

export default FirstAbout
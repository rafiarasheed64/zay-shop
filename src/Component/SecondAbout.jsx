import React from 'react'
import { Typography,Container, Grid } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import MultipleStopIcon from '@mui/icons-material/MultipleStop';
import PercentIcon from '@mui/icons-material/Percent';
import PersonIcon from '@mui/icons-material/Person';


const SecondAbout = () => {
  return (
    <div>
        <Container sx={{padding: '40px 20px',display: 'flex', flexDirection : 'column',justifyContent: 'center', alignItems: 'center'}}>
            <Typography sx={{fontSize: '45px', fontWeight: '500',marginTop : '20px'}}>Our Services</Typography>
            <Typography sx={{fontSize: '18px', textAlign: 'center',marginTop: '20px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet.</Typography>
            <Grid container sx={{display: 'flex', justifyContent: 'space-between', marginTop: '10px'}}>
                <Grid item xs={12} sm={6} md={3} className='hovr' sx={{marginTop: '10px', padding: '45px', border: '1px solid black', display: 'flex', flexDirection : 'column',justifyContent: 'center', alignItems: 'center', color: 'rgb(89,171,110)'}}>
                    <LocalShippingIcon sx={{fontSize: '60px'}}/>
                    <Typography>
                    Delivery Services
                    </Typography>

                </Grid>
                <Grid item xs={12} sm={6} md={3} className='hovr' sx={{marginTop: '10px', padding: '45px', border: '1px solid black', display: 'flex', flexDirection : 'column',justifyContent: 'center', alignItems: 'center', color: 'rgb(89,171,110)'}}>
                    <MultipleStopIcon sx={{fontSize: '60px'}}/>
                    <Typography>
                    Shipping & Return
                    </Typography>

                </Grid>
                <Grid item xs={12} sm={6} md={3} className='hovr' sx={{marginTop: '10px', padding: '45px', border: '1px solid black', display: 'flex', flexDirection : 'column',justifyContent: 'center', alignItems: 'center', color: 'rgb(89,171,110)'}}>
                    <PercentIcon sx={{fontSize: '60px'}}/>
                    <Typography>
                    Promotion
                    </Typography>

                </Grid>
                <Grid item xs={12} sm={6} md={3} className='hovr' sx={{marginTop: '10px', padding: '25px', border: '1px solid black', display: 'flex', flexDirection : 'column',justifyContent: 'center', alignItems: 'center', color: 'rgb(89,171,110)'}}>
                    <PersonIcon sx={{fontSize: '60px'}}/>
                    <Typography>
                    24 Hours Service
                    </Typography>

                </Grid>
            </Grid>
        </Container>

    </div>
  )
}

export default SecondAbout
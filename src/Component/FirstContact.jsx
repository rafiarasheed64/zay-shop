import React from 'react'
import { Typography,Grid, Container } from '@mui/material'

const FirstContact = () => {
  return (
    <div>
        <Container sx={{padding: '30px',display: 'flex', flexDirection: 'column', alignItems: 'center'}}>

        <Typography variant='h2'>Contact Us</Typography>
        <Typography sx={{marginTop: '20px'}} variant='body1'>
        Proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet.
        </Typography>
        <Grid sx={{ height: '60vh'}}>
            <img className='h-100 w-100' src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Lahore_Map.PNG" alt="" />

        </Grid>
        </Container>
    </div>
  )
}

export default FirstContact
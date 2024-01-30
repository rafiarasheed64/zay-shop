import React from 'react'
import {Container, Typography,Grid,TextField, Button} from '@mui/material'

const SecondContact = () => {
  return (
    <div>
        <Container sx={{padding: '30px', border: '1px solidb'}}>
            <Grid sx={{display: 'flex'}}>
                <Grid item md={6} sm={12} sx={{width: '50%'}}>
                    <Typography>Name</Typography>
                    <TextField sx={{width: '100%'}} label="Enter Name" variant="outlined"/>
                </Grid>
                <Grid item md={6} sm={12} sx={{width: '50%'}}>
                    <Typography>Email</Typography>
                    <TextField sx={{width: '100%'}} label="Enter Email" variant="outlined"/>
                </Grid>
            </Grid>
            <Typography sx={{marginTop: '20px'}}>Subject</Typography>
                    <TextField label="Enter Subject" variant="outlined" fullWidth/>  

            <Typography sx={{marginTop: '20px'}}>Message</Typography>

            <TextField label="Enter Message" variant="outlined" multiline rows={4} fullWidth/>

            <Button sx={{backgroundColor: 'rgb(89,171,110)', color: 'white',marginTop: '20px'}} variant="contained" color="primary">Let's Talk</Button>

        </Container>
    </div>
  )
}

export default SecondContact
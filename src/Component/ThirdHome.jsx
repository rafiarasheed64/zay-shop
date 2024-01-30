import React from 'react'
import { Container} from 'react-bootstrap'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const ThirdHome = () => {
  return (
    <div>
        <Container className='p-5'>
        <h2 className='txt3 text-center'>Featured Product</h2>
        <p className='text-center mt-3 fs-5'>Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla <br></br> pariatur. Excepteur sint occaecat cupidatat non proident.</p>
        {/* <Row className='d-flex justify-content-around'> */}

        <Grid container sx={{display: 'flex', justifyContent: 'space-between'}}>

          <Grid item sm={12} md={6} lg={3} >

        <Card >
      <CardActionArea>
        <CardMedia
          component="img"
        //   height="240"
          image="https://themewagon.github.io/zay-shop/assets/img/feature_prod_01.jpg"
          alt=""
        />
        <CardContent>
            <StarIcon sx={{color: 'yellow'}}/>
            <StarIcon sx={{color: 'yellow'}}/>
            <StarIcon sx={{color: 'yellow'}}/>
            <StarIcon sx={{color: 'rgb(188,188,188)'}}/>
            <StarIcon sx={{color: 'rgb(188,188,188)'}}/>

          <Typography gutterBottom variant="h5" component="div" sx={{marginTop: '10px'}}>
          Gym Weight
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{fontSize: '16px'}}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.
          </Typography>
          <Typography sx={{marginTop: '10px', color: 'rgb(194,195,214)'}}>
          Reviews (24)
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>


    <Grid item sm={12} md={6} lg={3} >
    <Card >
      <CardActionArea>
        <CardMedia
          component="img"
        //   height="240"
          image="https://themewagon.github.io/zay-shop/assets/img/feature_prod_02.jpg"
          alt=""
        />
        <CardContent>
        <StarIcon sx={{color: 'yellow'}}/>
            <StarIcon sx={{color: 'yellow'}}/>
            <StarIcon sx={{color: 'yellow'}}/>
            <StarIcon sx={{color: 'rgb(188,188,188)'}}/>
            <StarIcon sx={{color: 'rgb(188,188,188)'}}/>
          <Typography gutterBottom variant="h5" component="div" sx={{marginTop: '10px'}}>
          Cloud Nike Shoes
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{fontSize: '16px'}}>
          Aenean gravida dignissim finibus. Nullam ipsum diam, posuere vitae pharetra sed, commodo ullamcorper.
          </Typography>
          <Typography sx={{marginTop: '10px', color: 'rgb(194,195,214)'}}>
          Reviews (48)
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>


    <Grid item sm={12} md={6} lg={3} >
    <Card >
      <CardActionArea>
        <CardMedia
          component="img"
        //   height="240"
          image="https://themewagon.github.io/zay-shop/assets/img/feature_prod_03.jpg"
          alt=""
        />
        <CardContent>
        <StarIcon sx={{color: 'yellow'}}/>
            <StarIcon sx={{color: 'yellow'}}/>
            <StarIcon sx={{color: 'yellow'}}/>
            <StarIcon sx={{color: 'yellow'}}/>
            <StarIcon sx={{color: 'yellow'}}/>
          <Typography gutterBottom variant="h5" component="div" sx={{marginTop: '10px'}}>
          Summer Addides Shoes
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{fontSize: '16px'}}>
          Curabitur ac mi sit amet diam luctus porta. Phasellus pulvinar sagittis diam, et scelerisque ipsum lobortis nec.
          </Typography>
          <Typography sx={{marginTop: '10px', color: 'rgb(194,195,214)'}}>
          Reviews (74)
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
        </Grid>


        </Container>
    </div>
  )
}

export default ThirdHome
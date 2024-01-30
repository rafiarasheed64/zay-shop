import { Container} from "react-bootstrap";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";

const SecondHome = () => {
  return (
    <div>
      <Container className="p-4">
        <h2 className="txt3 text-center">Categories of The Month</h2>
        <p className="text-center mt-3 fs-5">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui{" "}
          <br /> officia deserunt mollit anim id est laborum.
        </p>
        {/* <Row className="d-flex  justify-content-around  mt-4"> */}
          <Grid container sx={{display: 'flex', justifyContent: 'space-between'}}>

          <Grid item sm={12} md={6} lg={3} >

          <Card
            sx={{
              // maxWidth: 300,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <CardActionArea
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CardMedia
                sx={{ borderRadius: "50%" }}
                component="img"
                // height="300"
                image="https://themewagon.github.io/zay-shop/assets/img/category_img_01.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Watches
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                sx={{
                  padding: "10px",
                  backgroundColor: "rgb(89,171,110)",
                  color: "black",
                  border: "1px solid",
                  fontWeight: "700",
                }}
              >
                Go Shop
              </Button>
            </CardActions>
          </Card>

          </Grid>

              
          <Grid item sm={12} md={6} lg={3} >


          <Card
            sx={{
              // maxWidth: 300,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <CardActionArea
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CardMedia
                sx={{ borderRadius: "50%" }}
                component="img"
                // height="300"
                image="https://themewagon.github.io/zay-shop/assets/img/category_img_02.jpg"
                alt=""
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Shoes
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                sx={{
                  padding: "10px",
                  backgroundColor: "rgb(89,171,110)",
                  color: "black",
                  border: "1px solid",
                  fontWeight: "700",
                }}
              >
                Go Shop
              </Button>
            </CardActions>
          </Card>

          </Grid>

          <Grid item sm={12} md={6} lg={3} >



          <Card
            sx={{
              // maxWidth: 300,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <CardActionArea
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CardMedia
                sx={{ borderRadius: "50%" }}
                component="img"
                // height="300"
                image="https://themewagon.github.io/zay-shop/assets/img/category_img_03.jpg"
                alt=""
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Accessories
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                sx={{
                  padding: "10px",
                  backgroundColor: "rgb(89,171,110)",
                  color: "black",
                  border: "1px solid",
                  fontWeight: "700",
                }}
              >
                Go Shop
              </Button>
            </CardActions>
          </Card>

          </Grid>


          </Grid>

      </Container>
    </div>
  );
};

export default SecondHome;

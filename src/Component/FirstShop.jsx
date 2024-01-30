import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import image1 from "./zay-shop-image/shop_01.jpg";
import image2 from "./zay-shop-image/shop_02.jpg";
import image3 from "./zay-shop-image/shop_03.jpg";
import image4 from "./zay-shop-image/shop_04.jpg";
import image5 from "./zay-shop-image/shop_05.jpg";
import image6 from "./zay-shop-image/shop_06.jpg";
import image7 from "./zay-shop-image/shop_07.jpg";
import image8 from "./zay-shop-image/shop_08.jpg";
import image9 from "./zay-shop-image/shop_09.jpg";
import StarIcon from "@mui/icons-material/Star";

const FirstShop = () => {
  return (
    <div>
      <Container>

        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "space-between",

          }}
          >
          {/*   Left Side Bar   */}
          <Grid item lg={4} md={12} sm={12} xs={12}>
            <Typography variant="h3">Categories</Typography>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Gender</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Men</Typography>
                <Typography>Women</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Sale</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Sport</Typography>
                <Typography>Luxury</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Product</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Bags</Typography>
                <Typography>Sweater</Typography>
                <Typography>Sunglasses</Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
          {/*   Left Side Bar End  */}

          {/* Main Parent */}
          <Grid item lg={8} md={12} >
            <Typography
              sx={{ listStyle: "none", padding: '10px' }}
              component="div"
              variant="body1"
            >
              <ul className="lstt">
                <li className="lstt1">All</li>
                <li className="lstt1">Men's</li>
                <li className="lstt1">Women's</li>
              </ul>
            </Typography>

          {/* Sub Main Parent */}

            <Grid container spacing={3} >

              {/* 1st Card */}
              <Grid item
                xs={12} sm={6} md={4} lg={4}
              >
                <Card sx={{ maxWidth: 400 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="320"
                      image={image1}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Oupidatat non
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        M/L/X/XL
                      </Typography>
                      <StarIcon sx={{ color: "yellow" }} />
                      <StarIcon sx={{ color: "yellow" }} />
                      <StarIcon sx={{ color: "yellow" }} />
                      <StarIcon sx={{ color: "rgb(188,188,188)" }} />
                      <StarIcon sx={{ color: "rgb(188,188,188)" }} />
                      <Typography>$250.00</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>

              <Grid item
                xs={12} sm={6} md={4} lg={4}
              >
                <Card sx={{ maxWidth: 400 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="320"
                      image={image2}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Oupidatat non
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        M/L/X/XL
                      </Typography>
                      <StarIcon sx={{ color: "yellow" }} />
                      <StarIcon sx={{ color: "yellow" }} />
                      <StarIcon sx={{ color: "yellow" }} />
                      <StarIcon sx={{ color: "rgb(188,188,188)" }} />
                      <StarIcon sx={{ color: "rgb(188,188,188)" }} />
                      <Typography>$250.00</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>

              <Grid item
                xs={12} sm={6} md={4} lg={4}
              >
                <Card sx={{ maxWidth: 400 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="320"
                      image={image3}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Oupidatat non
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        M/L/X/XL
                      </Typography>
                      <StarIcon sx={{ color: "yellow" }} />
                      <StarIcon sx={{ color: "yellow" }} />
                      <StarIcon sx={{ color: "yellow" }} />
                      <StarIcon sx={{ color: "rgb(188,188,188)" }} />
                      <StarIcon sx={{ color: "rgb(188,188,188)" }} />
                      <Typography>$250.00</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>

              <Grid item
                xs={12} sm={6} md={4} lg={4}
              >
                <Card sx={{ maxWidth: 400 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="320"
                      image={image4}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Oupidatat non
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        M/L/X/XL
                      </Typography>
                      <StarIcon sx={{ color: "yellow" }} />
                      <StarIcon sx={{ color: "yellow" }} />
                      <StarIcon sx={{ color: "yellow" }} />
                      <StarIcon sx={{ color: "rgb(188,188,188)" }} />
                      <StarIcon sx={{ color: "rgb(188,188,188)" }} />
                      <Typography>$250.00</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>

              <Grid item
               xs={12} sm={6} md={4} lg={4}
              >
                <Card sx={{ maxWidth: 400 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="320"
                      image={image5}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Oupidatat non
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        M/L/X/XL
                      </Typography>
                      <StarIcon sx={{ color: "yellow" }} />
                      <StarIcon sx={{ color: "yellow" }} />
                      <StarIcon sx={{ color: "yellow" }} />
                      <StarIcon sx={{ color: "rgb(188,188,188)" }} />
                      <StarIcon sx={{ color: "rgb(188,188,188)" }} />
                      <Typography>$250.00</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>

              <Grid item
                xs={12} sm={6} md={4} lg={4}
              >
                <Card sx={{ maxWidth: 400 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="320"
                      image={image6}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Oupidatat non
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        M/L/X/XL
                      </Typography>
                      <StarIcon sx={{ color: "yellow" }} />
                      <StarIcon sx={{ color: "yellow" }} />
                      <StarIcon sx={{ color: "yellow" }} />
                      <StarIcon sx={{ color: "rgb(188,188,188)" }} />
                      <StarIcon sx={{ color: "rgb(188,188,188)" }} />
                      <Typography>$250.00</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>

              <Grid item
                xs={12} sm={6} md={4} lg={4}
              >
                <Card sx={{ maxWidth: 400 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="320"
                      image={image7}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Oupidatat non
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        M/L/X/XL
                      </Typography>
                      <StarIcon sx={{ color: "yellow" }} />
                      <StarIcon sx={{ color: "yellow" }} />
                      <StarIcon sx={{ color: "yellow" }} />
                      <StarIcon sx={{ color: "rgb(188,188,188)" }} />
                      <StarIcon sx={{ color: "rgb(188,188,188)" }} />
                      <Typography>$250.00</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>

              <Grid item
                xs={12} sm={6} md={4} lg={4}
              >
                <Card sx={{ maxWidth: 400 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="320"
                      image={image8}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Oupidatat non
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        M/L/X/XL
                      </Typography>
                      <StarIcon sx={{ color: "yellow" }} />
                      <StarIcon sx={{ color: "yellow" }} />
                      <StarIcon sx={{ color: "yellow" }} />
                      <StarIcon sx={{ color: "rgb(188,188,188)" }} />
                      <StarIcon sx={{ color: "rgb(188,188,188)" }} />
                      <Typography>$250.00</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>

              <Grid item
                xs={12} sm={6} md={4} lg={4}
              >
                <Card sx={{ maxWidth: 400 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="320"
                      image={image9}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Oupidatat non
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        M/L/X/XL
                      </Typography>
                      <StarIcon sx={{ color: "yellow" }} />
                      <StarIcon sx={{ color: "yellow" }} />
                      <StarIcon sx={{ color: "yellow" }} />
                      <StarIcon sx={{ color: "rgb(188,188,188)" }} />
                      <StarIcon sx={{ color: "rgb(188,188,188)" }} />
                      <Typography>$250.00</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default FirstShop;

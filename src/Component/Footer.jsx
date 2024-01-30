import {Container, Row , Col, InputGroup, Form, Button} from 'react-bootstrap'
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <div className='footerbg p-5'>
        <Container >
            <Row className='greyline'>
                <Col sm={12} md={6} lg={4}>
                <h2 className='txt4'>Zay Shop</h2>
                <ul className='lst'>
                    <li className='lst1'>
                    <FmdGoodIcon/>
                    <span>  123 Consectetur at ligula 10660</span>
                    </li>
                    <li className='lst1'>
                    <LocalPhoneIcon/>
                    <span className='txt5'>  010-020-0340</span>
                    </li>
                    <li className='lst1'>
                    <EmailIcon/>
                    <span className='txt5'>  info@company.com</span>
                    </li>
                </ul>
                </Col>
                <Col sm={12} md={6} lg={4}>
                <h2 className='txt6'>Products</h2>
                <ul className='lst'>
                    <li className='txt5'>Luxury</li>
                    <li className='txt5'>Sport Wear</li>
                    <li className='txt5'>Men's Shoes</li>
                    <li className='txt5'>Women's Shoes</li>
                    <li className='txt5'>Popular Dress</li>
                    <li className='txt5'>Gym Accessories</li>
                    <li className='txt5'>Sport Shoes</li>

                </ul>
                </Col>
                <Col sm={12} md={6} lg={4}>
                <h2 className='txt6'>Further Info</h2>
                <ul className='lst'>
                    <li className='txt5'>Home</li>
                    <li className='txt5'>About Us</li>
                    <li className='txt5'>Shop Locations</li>
                    <li className='txt5'>FAQs</li>
                    <li className='txt5'>Contact</li>
                </ul>
                </Col>
            </Row>
            <Row className='mt-4 d-flex justify-content-between'>
                <Col lg={2} md={4} sm={7} className='d-flex justify-content-between mt-3'>
                    <FacebookIcon className='icn'/>
                    <InstagramIcon className='icn'/>
                    <TwitterIcon className='icn'/>
                    <LinkedInIcon className='icn'/>

                </Col>
                <Col md={4} sm= {7} className='mt-3'>
                <InputGroup className="mb-3 bg-transparent">
        <Form.Control className='bg-transparent text-light'
          placeholder="Email Address"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button className='btn' variant="outline-secondary" id="button-addon2">
          Subscribe
        </Button>
      </InputGroup>
      </Col>
            </Row>
            <p className='bg-dark text-light p-3 mt-2'>Copyright © 2021 Company Name | Designed by <span className='txt5'>TemplateMo</span></p>
            </Container>
    </div>
  )
}

export default Footer
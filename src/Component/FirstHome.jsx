import {Carousel, Row , Col} from 'react-bootstrap';
import image from './zay-shop-image/banner_img_01.jpg'
import image1 from './zay-shop-image/banner_img_02.jpg'
import image2 from './zay-shop-image/banner_img_03.jpg'

function UncontrolledExample() {
  return (  
    <Carousel style={{height: 'max-content', backgroundColor: 'rgb(239,239,239)'}}>
      <Carousel.Item className='h-100'>
        <Row className='d-flex align-items-center justify-content-center'>
            <Col className='p-5' md={5} > 
            <h1 className='txt1'>Repr in voluptate</h1>
            <h2>Ullamco laboris nisi ut</h2>
            <p className='txt2'>We bring you 100% free CSS templates for your websites. If you wish to support TemplateMo, please make a small contribution via PayPal or tell your friends about our website. Thank you.</p>
            </Col>
            <Col md={5}>
                <img style={{height: "100%", width: '95%', marginTop:'10px'}} src={image} alt="" />
            </Col>
        </Row>
      </Carousel.Item>
      <Carousel.Item>
      <Row className='d-flex align-items-center justify-content-center'>
            <Col  className='p-5' md={5} >   
        <h1 className='txt3'>Proident occaecat</h1>
        <h2>Aliquip ex ea commodo consequat</h2>
        <p className='txt2'>You are permitted to use this Zay CSS template for your commercial websites. You are not permitted to re-distribute the template ZIP file in any kind of template collection websites.</p>
          
            </Col>
            <Col md={5}>
                <img style={{height: "100%", width: '95%', marginTop:'10px'}} src={image1} alt="" />
            </Col>
        </Row>
      </Carousel.Item>
      <Carousel.Item>
      <Row className='d-flex align-items-center justify-content-center'>
            <Col className='p-5' md={5} > 
            <h1 className='txt1'>Repr in voluptate</h1>
            <h2>Ullamco laboris nisi ut</h2>
            <p className='txt2'>We bring you 100% free CSS templates for your websites. If you wish to support TemplateMo, please make a small contribution via PayPal or tell your friends about our website. Thank you.</p>
            </Col>
            <Col md={5}>
                <img style={{height: "100%", width: '95%', marginTop:'10px'}} src={image2} alt="" />
            </Col>
        </Row>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
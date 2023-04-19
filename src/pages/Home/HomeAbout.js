import React from 'react'
import './HomeAbout.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
// import Carousel from 'react-bootstrap/Carousel';
import { Col, Container, Row, } from 'react-bootstrap';
import logo_about from '../../assets/logo_about.png'
import ornament from '../../assets/ornament.png'
import Carousel from 'react-bootstrap/Carousel';



const HomeAbout = ({indicators, controls}) => (
  <div className='container-about'>
    <div>
      <h1 className='heding-about'> ABOUT US </h1>
     </div>
     <div className='paragraph'>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         <p>Phasellus arcu libero.</p>
       </p>
     </div>
     <Container  fluid className='about-content' >
       <Row className='center-about'>
         <Col sm={5}>

          <h2 className='heding_two'>The History</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lectus tortor, pretium convallis ex non,
            fermentum iaculis eros. Vivamus ut porttitor risus. Pellentesque semper vel turpis nec pellentesque. Etiam luctus lorem purus,
            non suscipit nibh consectetur a. In condimentum enim mauris, ut bibendum augue auctor sed. </p>
          <p>  Nullam ut ligula id nulla feugiat aliquet. Nunc quis euismod justo.
            Curabitur auctor facilisis nibh a pulvinar. Nam sed dignissim elit, vitae pellentesque odio.
           .</p>
          <div className='ornament'><img src={ornament} alt='ornament'  /> </div>
        </Col>
        <Col sm={4}>
          <Carousel fade indicators={indicators}>
            <Carousel.Item interval={6000}>
              <img
                className="d-block w-100"
                src={require('../../assets/about01.jpg')}
                alt="First slide" />
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100"
                src={require('../../assets/about02.jpg')}
                alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100"
                src={require('../../assets/about03.jpg')}
                alt="Third slide" />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
    <Container fluid indicators={indicators}>
      <Row className='center-about'>
        <Col sm={4}>
          <Carousel fade >
            <Carousel.Item interval={6000}>
              <img
                className="d-block w-100"
                src={require('../../assets/about04.jpg')}
                alt="First slide" />
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100"
                src={require('../../assets/about05.jpg')}
                alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100"
                src={require('../../assets/about06.jpg')}
                alt="Third slide" />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col sm={5}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lectus tortor, pretium convallis ex non,
             fermentum iaculis eros. Vivamus ut porttitor risus. Pellentesque semper vel turpis nec pellentesque. Etiam luctus lorem purus,
             non suscipit nibh consectetur a. In condimentum enim mauris, ut bibendum augue auctor sed. </p> 
          <p>  Nullam ut ligula id nulla feugiat aliquet. Nunc quis euismod justo. 
              Curabitur auctor facilisis nibh a pulvinar.. Proin dictum id massa id tempor. Integer molestie risus ut justo facilisis, eu tempus urna consectetur. Vestibulum posuere fringilla interdum. Nam eu urna placerat, bibendum tellus sit amet, elementum lectus.
               Curabitur faucibus tellus eros, vitae accumsan lorem pulvinar in
               </p>
        
          </Col>
      </Row>
    </Container>
  </div>

)

export default HomeAbout
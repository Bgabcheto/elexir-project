import React from 'react'
import {Link} from 'react-router-dom'
import './HomeMenu.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Container, Row, } from 'react-bootstrap';
import raster from '../../../assets/raster.png'



const HomeMenu = () => {
  return (
    <div className='home-menu'>
        <Container>
            <Row className='menu-title'>
                <Col>
                <div>
                    <h2 className='heding' >opening hours</h2>
                    <p className='red'> Call For Reservations</p>
                </div>
                </Col>
            </Row>
            <Row className='menu-content'>
                <Col>
                <div className='left'>
                <h3 className='red'>
                    Sunday to <br/> Tusday
                </h3>
                <p> 09:00 <br/> 24:00 </p>
                </div>
                </Col>
                <Col>
                    <div className='right'>
                  <h3 className='red'>
                    Friday and <br/> Saturday
                </h3>
                <p> 08:00 <br/> 03:00 </p>
                </div>
                </Col>
                
            </Row>
            <Row className='reservation'>
                <Col>
                    <p>reservation number: 088-9990030</p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default HomeMenu
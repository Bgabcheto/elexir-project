import React from 'react'
import './HomePage.scss'
import {Link, NavLink} from 'react-router-dom'
import logo_red from '../../../assets/logo_red.png'
import logo_separator from '../../../assets/logo_separator.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from 'react-bootstrap/Carousel';

const HomePage = ({indicators, controls}) => {
  return (
    <div className='home-img-container'>
         <Carousel fade indicators={indicators} controls={controls}>
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100"
                src={require('../../../assets/home-one.jpg')}
                alt="First slide" />
                <Carousel.Caption>
                <div className='home-content'>
            <div className='logo-red'>
            <Link to='/'>
                <img src={logo_red} alt='logo_red'  />
                </Link>
            </div>
            <div>
                <h1 className='heding-one'>italian style restaurant</h1>
            </div>
            <div className='separator'>
            <Link to='/'>
                <img src={logo_separator} alt='logo_separator'  />
            </Link>
            </div>
            <div>
                <h3 className='heading-three'>
                    The Chef creates divine combinations
                </h3>
            </div>

        </div>
         </Carousel.Caption>
                </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100"
                src={require('../../../assets/home-two.jpg')}
                alt="Second slide" />
                <Carousel.Caption>
                <div className='home-content'>
            <div className='logo-red'>
            <Link to='/'>
                <img src={logo_red} alt='logo_red'  />
                </Link>
            </div>
            <div>
                <h1 className='heding-one'>welcome to restaurant</h1>
            </div>
            <div className='separator'>
            <Link to='/'>
                <img src={logo_separator} alt='logo_separator'  />
            </Link>
            </div>
            <div>
                <h3 className='heading-three'>
                    The Chef creates divine combinations
                </h3>
            </div>

        </div>
         </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100"
                src={require('../../../assets/img-pizza.jpg')}
                alt="Third slide" />
                <Carousel.Caption>
                <div className='home-content'>
            <div className='logo-red'>
            <Link to='/'>
                <img src={logo_red} alt='logo_red'  />
                </Link>
            </div>
            <div>
                <h1 className='heding-one'>elixir exclusively food</h1>
            </div>
            <div className='separator'>
            <Link to='/'>
                <img src={logo_separator} alt='logo_separator'  />
            </Link>
            </div>
            <div>
                <h3 className='heading-three'>
                    The Chef creates divine combinations
                </h3>
            </div>

        </div>
         </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
    </div>
  )
}

export default HomePage
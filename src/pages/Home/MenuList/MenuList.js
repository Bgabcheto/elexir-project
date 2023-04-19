import React from 'react';
import './MenuList.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import menu_logo from '../../../assets/menu_logo.png';
import menu_left from '../../../assets/menu_left.jpg';
import menu_right from '../../../assets/menu_right.jpg'

const menuItems = [
  { typeProduct: 'Great Pasta', product: 'Hamburger', productInfo: 'Salates, Salami, Sos', price: 10.99 },
  { typeProduct: 'Our Pizzas', product: 'Cheeseburger', productInfo: 'Salates, Beef Steak, Sos', price: 11.99 },
  { typeProduct: 'Chicken Menu', product: 'Chicken Sandwich', productInfo: 'Salates, Chicken, Sos', price: 9.99 },
  { product: 'Fish and Chips', productInfo: 'Fish, Chips, Sos', price: 12.99 },
  { product: 'Caesar Salad', productInfo: 'Green Salates, Chicken, Sos', price: 8.99 },
  { product: 'Soup of the Day', productInfo: 'Meet, Egg, Sos', price: 6.99 },
  { product: 'Chicken and Chips', productInfo: 'Fish, Chips, Sos', price: 12.99 },
  { product: 'Ropotamo Salad', productInfo: 'Green Salates, Chicken, Sos', price: 8.99 },
  { product: 'Burger of the Day', productInfo: 'Meet, Egg, Sos', price: 6.99 },
  { product: 'Caesar Salad', productInfo: 'Green Salates, Chicken, Sos', price: 8.99 },
  { product: 'Tost of the Day', productInfo: 'Meet, Egg, Sos', price: 6.99 },
  { product: 'Burger and Chips', productInfo: 'Fish, Chips, Sos', price: 12.99 },
];

const Menu = () => {
  return (
    <Container fluid className="menu-container">
        <Row>
            <Col className="d-flex justify-content-center"><img src={menu_logo} alt='menu_logo'/> </Col>
        </Row>
        <img src={menu_left} alt='menu_left' className="menu-image"/>
      <Row className="menu-items">
        {menuItems.map((item, index) => (
          <Col key={index} xs={12} sm={6} md={4}>
            <div className="menu-item">
              <h2 className='green-product'>{item.typeProduct}</h2>
              <h4>{item.product}</h4>
              <p className='product-info'>{item.productInfo}
               <span className='price-red'>${item.price}</span>
              </p>
               </div>
          </Col>
        ))}
      </Row>
      <Row>
                <Col className="d-flex justify-content-center">
            <button className="centered-button">VIEW COMPLETE MENU</button>
                </Col>
      </Row>

      <img src={menu_right} alt='menu_right' className="menu-image-right"/>
    </Container>
  );
};

export default Menu;

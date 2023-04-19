import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './HomeForm.scss';

  const HomeForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className='home-form'>
      <div className='content-form'> 
        <div className='testimonials-content-p'>
        <h4 className='testimonials'>TESTIMONIALS</h4>
        <p className='testimonials-paragraph'>Applicake chocolate cake wafer.Tart marshmelow wafer macaron cheesecake jelly.</p>
        <p className='testimonials-paragraph'>Gingerbrade cookie souffle sweet rolw jelli-o.</p>
        <p className='testimonials'>-Alexander Smith</p>
        </div>
      </div>
      </div>
  );
};

export default HomeForm;







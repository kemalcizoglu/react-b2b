import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer';

import {Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <>
      <Header headerTitle={'B2B'} />
      <Container>
        <Row className="mb-3">
          <h1 className='my-4'>Hakkında</h1>
        </Row>
        <hr />
        <Row className="mb-2 mt-5">
          <h4 className='mb-2'>Projede Kullanılan Teknolojiler</h4>
          <Col>
            <ul>
              <li>React JS Kütüphanesi</li>
              <li>React Redux</li>
              <li>React Redux-Toolkit</li>
              <li>React Bootstrap</li>
              <li>React Router Dom</li>
              <li>Axios</li>
              <li>ES6 JSX</li>
            </ul>
          </Col>
        </Row>
        <hr className="mb-5"/>

      </Container>
      <Footer/>
    </>
  )
}

export default About
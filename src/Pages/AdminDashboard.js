import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Title from '../components/Title'
import { Row, Col, Container } from 'react-bootstrap'

const AdminDashboard = () => {
  return (
    <>
    <Header headerTitle="B2B" />
    <Container>
        <Row>
            <Col>
                <Title title="Admin Dashboard" />
                
                Sipariş listesi... vs.
                
            </Col>
        </Row>
    </Container>
    <Footer />
</>
  )
}

export default AdminDashboard
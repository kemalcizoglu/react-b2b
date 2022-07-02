import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Title from '../components/Title'
import { Row, Col, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { removeCart } from './../store/site'
import { useNavigate } from 'react-router-dom'


const CheckOutSuccess = () => {
    const { cart } = useSelector(state => state.site);

    const dispatch = useDispatch();
    let navigate = useNavigate();


    const sendMail = () => {
       //SEND Email..
    }

    useEffect(() => {

        if (cart.length <= 0) {
            navigate("/cart", { replace: true });
        } else {
            sendMail();
        }

    }, [])



    return (
        <>
            <Header headerTitle="B2B" />
            <Container>
                <Row>
                    <Col>
                        <Title title="Siparişiniz Alındı" />
                        Teşekkürler, siparişiniz alındı ve siparişine ait özet mail adresinize gönderildi.
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default CheckOutSuccess
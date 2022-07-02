import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Title from '../components/Title'
import { Row, Col, Container, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


const CheckOut = () => {

    const { cart } = useSelector(state => state.site);

    let navigate = useNavigate();


    useEffect(() => {

        if (cart.length <= 0) {
            navigate("/cart", { replace: true });
        }


    }, [cart])


    const total = () => {
        let ToplamTutar = 0;

        cart.map((item) => {
            ToplamTutar += item.price;
        });

        return ToplamTutar;
    }



    const Total = () => {
        return (
            <div className="fs-1 fw-bold text-danger mt-4 dw-100 mb-4 pb-3 fs-1 fw-bold text-danger mt-4 d-flex border-bottom">
                Toplam ödeyeceğiniz tutar: {total()} TL
            </div>
        )
    }



    const checkOutSuccess = () => {
        navigate("/checkout/success", { replace: true });
    }

    const CartItems = () => {
        return cart.map((item) => {
            return (
                <div key={item.isbn} className="d-flex justify-content-between p-2 border-bottom">
                    <div className="d-flex align-items-center">
                        <div className="me-3">
                            <img src={item.thumbnailUrl} alt="BookImage" style={{ width: 40 }} />
                        </div>
                        <div>
                            {item.title}
                        </div>

                    </div>
                    <div>
                        {item.price} TL
                    </div>
                </div>
            )
        })
    }


    return (
        <>
            <Header headerTitle="B2B" />
            <Container>
                <Row>
                    <Col>
                        <Title title="Sipariş Özeti" />
                        <CartItems />
                    </Col>
                </Row>

                <Row>
                    <Col className="d-flex justify-content-end mt-4">
                        <Total />
                    </Col>
                </Row>

                <Row>
                    <Col className="d-flex justify-content-center mb-5">
                        <div style={{ width: 300, height: 300, border: '1px solid #ededed' }} className="d-flex justify-content-center align-items-center">
                            Kredi kartı bilgileri girişi
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col className="d-flex justify-content-end mb-5">
                        <Button variant="primary" onClick={() => checkOutSuccess()}>Ödemeyi ve Siparişi Tamamla</Button>

                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default CheckOut
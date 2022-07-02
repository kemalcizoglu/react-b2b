import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import Title from '../components/Title';
import { removeCart } from './../store/site'
import { useNavigate } from 'react-router-dom';

const Cart = () => {

    const { cart } = useSelector(state => state.site);
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const removeItem = (currentItem) => {
        const newRemoveItems = cart.filter((item) => {
            return item.isbn !== currentItem.isbn
        });
        dispatch(removeCart(newRemoveItems));
    }

    const checkOut = () => {
        if (cart.length > 0) {
            navigate("/checkout", { replace: true });
        }
    }


    function total(){
        let ToplamTutar = 0;

        cart.map((item) => {
            ToplamTutar += item.price;
        });

        return ToplamTutar;
    }



    const Total = () => {
        return (
            <div className="fs-1 fw-bold text-danger mt-4 dw-100 mb-4 pb-3 fs-1 fw-bold text-danger mt-4 d-flex border-bottom">
                {total()} TL
            </div>
        )
    }

    const CartItems = () => {

        if (cart.length <= 0) {
            return (
                <>
                    Henüz sepetinizde bir ürün bulunmuyor.
                </>
            )
        } else {

            return cart.map((item) => {
                return (
                    <div key={item.isbn} className="d-flex justify-content-between p-2 border-bottom">
                        <div className="d-flex align-items-center">
                            <div className="me-3">
                                <img src={item.thumbnailUrl} alt="BookImage" style={{ width: 100 }} />
                            </div>
                            <div className="d-flex justify-content-between">
                                <div>
                                    {item.title}
                                </div>

                            </div>
                        </div>
                        <div className="d-flex align-items-center">

                            <div className="me-3 fw-bold fs-4">
                                {item.price} TL
                            </div>

                            <Button variant="danger" onClick={() => removeItem(item)}>Sil</Button>
                        </div>
                    </div>
                )
            })
        }
    }

    return (
        <>
            <Header headerTitle="B2B" />
            <Container>
                <Row>
                    <Col>
                        <Title title="Sepet" />
                        <CartItems />

                    </Col>
                </Row>
                {cart.length > 0 &&
                    <Row>
                        <Col className="d-flex justify-content-end mt-4">
                        <div className="d-flex flex-column">
                           Toplam: <Total />
                            <Button variant="primary" onClick={() => checkOut()}>Ödeme Yap</Button>
                        </div>
                        </Col>
                    </Row>
                }
            </Container>
            <Footer />
        </>
    )
}

export default Cart
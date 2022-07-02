import React from 'react'
import { Col, Card, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import { setCart } from './../store/site'


const Products = (props) => {

    const dispatch = useDispatch();
    const { cart } = useSelector(state => state.site);

    const addCart = (item) => {

        if (cart.includes(item)) {
        } else {
            dispatch(setCart(item));
        }

    }


    return props.productData.map((item, key) => {
        if (item.categories === props.categoryId) {
            return (
                <Col md={3} lg={2} xs={6} key={key} className="mb-5">
                    <Card style={{ width: '100%', height: 400 }}>
                        <Card.Img variant="top" src={item.thumbnailUrl} className="d-flex justify-content-center w-100" />
                        <Card.Body>
                            <Card.Title className="fs-6">{item.title}</Card.Title>
                        </Card.Body>
                        <div className="d-flex ps-3 pb-2 fs-5 fw-bold text-danger" style={{}}>{item.price} TL</div>

                        <Button variant="primary" onClick={() => addCart(item)}>Sepete Ekle</Button>

                    </Card>
                </Col>
            )
        }else{
           return(
            <div key={key}>
                
            </div>
           )
        }
    });
}

export default Products
import React from 'react'
import { Container, Row, Col} from 'react-bootstrap';
import Title from './Title';
import Products from './Products';

import { useSelector } from 'react-redux'

const HomeProducts = () => {

    const { data } = useSelector(state => state.site);

    return (
        <Container>
            <Row>
                <Col>
                    <Title title="Roman Kitapları" />
                </Col>
            </Row>
            <Row>
                <Products categoryId={1} productData={data.products} />
            </Row>

            <Row>
                <Col>
                    <Title title="Bilim Kitapları" />
                </Col>
            </Row>
            <Row>
                <Products categoryId={2} productData={data.products} />
            </Row>

            <Row>
                <Col>
                    <Title title="Edebiyat Kitapları" />
                </Col>
            </Row>

            <Row>
                <Products categoryId={3} productData={data.products} />
            </Row>
            <Row>
                <Col>
                    <Title title="Felsefe Kitapları" />
                </Col>
            </Row>

            <Row>
                <Products categoryId={4} productData={data.products} />
            </Row>
        </Container>

    )
}

export default HomeProducts
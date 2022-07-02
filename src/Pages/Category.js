import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useParams } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux'
import Products from '../components/Products';
import Title from '../components/Title';


const Category = () => {

    let params = useParams();
    let categoryName;
    let categoryId;

    if (params.categoryId === 'roman') {
        categoryName = 'Roman';
        categoryId = 1;
    } else if (params.categoryId === 'bilim') {
        categoryName = 'Bilim';
        categoryId = 2;
    } else if (params.categoryId === 'edebiyat') {
        categoryName = 'Edebiyat';
        categoryId = 3;
    } else if (params.categoryId === 'felsefe') {
        categoryName = 'Felsefe';
        categoryId = 4;
    }


    const { data } = useSelector(state => state.site);


    return (
        <>
            <Header headerTitle="B2B" />
            <Container>
                <Row>
                    <Col>
                        <Title title={`${categoryName} Kitapları`} />
                    </Col>
                </Row>
                <Row>
                    <Products categoryId={categoryId} productData={data.products} />
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default Category
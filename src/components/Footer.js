import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <Container fluid className="mt-5" style={{ backgroundColor: '#ededed', borderTop: '1px solid #ccc' }}>
            <Row>
                <Col>
                    <Container>
                        <Row>
                            <Col>
                                <div style={{ height: 100 }} className="d-flex align-items-center justify-content-between">

                                    <h4>KC</h4>

                                    <div>
                                        Tüm hakları saklıdır.
                                    </div>

                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer
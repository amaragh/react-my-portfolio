import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Navigation from '../Navigation';

function Header() {
    return (

        <Container>
            <Row className='justify-content-between'>
                <Col md={2}>
                    <h2>amaragh</h2>
                </Col>
                <Col>
                    <Navigation />
                </Col>
            </Row>
        </Container>
    )
}

export default Header;
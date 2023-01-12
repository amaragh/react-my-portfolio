import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Navigation() {
    return (
        <header className=''>

            <Container>
                <Row>
                    <Col md={2}>
                        <h2>amaragh</h2>
                    </Col>
                    <Col>
                        <div>
                            <Nav>
                                <Nav.Item as="li">
                                    <Nav.Link href='/about'>About Me</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link href='/about'>Portfolio</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link href='/about'>Contact</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link href='/about'>Resume</Nav.Link>
                                </Nav.Item>
                            </Nav>

                        </div>
                    </Col>
                </Row>
            </Container>

        </header>

    )

}

export default Navigation;
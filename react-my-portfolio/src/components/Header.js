import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navigation from './Navigation';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

function Header() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {

        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
        return <About />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (

        <Container>
            <Row className='justify-content-between'>
                <Col md={2}>
                    <h2><a href="/">Amaragh</a></h2>
                </Col>
                <Col>    
                    <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
                    {renderPage()}
                </Col>
            </Row>
        </Container>
    )
}

export default Header;
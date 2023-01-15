import React, { useState } from 'react';
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
        <div className='container'>
            <div className='row justify-content-between'>
                <div className='col-md-3'>
                    <h2>
                        <a href="/">ALECIA MARAGH</a>
                    </h2>
                </div>
                <div className='col-md-9' >
                    <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
                </div>
            </div>
            <div className='row'>
                {renderPage()}
            </div>
        </div>
    )
}

export default Header;
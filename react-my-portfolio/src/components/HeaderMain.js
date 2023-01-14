import React, { useState } from 'react';
import Header from './Header'
import About from './pages/About'
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'


function HeaderMain() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {

        if (currentPage === 'About Me') {
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
        <div>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    );
}

export default HeaderMain;

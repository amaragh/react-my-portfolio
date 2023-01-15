import React from 'react';

function Navigation({ currentPage, handlePageChange }) {
    return (
        <ul className="nav d-flex justify-content-end">
            <li className="nav-item">
            {currentPage === 'About' ? (
                    <a className='nav-link'
                        style={{ background: '#e0d8deff', color: '#45050cff' }}
                        href='#about'>About</a>

                ) : (
                    <a className='nav-link'
                        style={{ color: '#e0d8deff' }}
                        href='#about'
                        onClick={() => { handlePageChange('About') }}>About</a>
                )}
            </li>
            <li className="nav-item">
                {currentPage === 'Portfolio' ? (
                    <a className='nav-link'
                        style={{ background: '#e0d8deff', color: '#45050cff' }}
                        href='#portfolio'>Portfolio</a>

                ) : (
                    <a className='nav-link'
                        style={{ color: '#e0d8deff' }}
                        href='#portfolio'
                        onClick={() => { handlePageChange('Portfolio') }}>Portfolio</a>
                )}
            </li>
            <li className="nav-item">
                {currentPage === 'Contact' ? (
                    <a className='nav-link'
                        style={{ background: '#e0d8deff', color: '#45050cff' }}
                        href='#contact'>Contact</a>

                ) : (
                    <a className='nav-link'
                        style={{ color: '#e0d8deff' }}
                        href='#contact'
                        onClick={() => { handlePageChange('Contact') }}>Contact</a>
                )}
            </li>
            <li className="nav-item">
                {currentPage === 'Resume' ? (
                    <a className='nav-link'
                        style={{ background: '#e0d8deff', color: '#45050cff' }}
                        href='#resume'>Resume</a>

                ) : (
                    <a className='nav-link'
                        style={{ color: '#e0d8deff' }}
                        href='#resume'
                        onClick={() => { handlePageChange('Resume') }}>Resume</a>
                )}
            </li>
        </ul>
    );
}

export default Navigation;
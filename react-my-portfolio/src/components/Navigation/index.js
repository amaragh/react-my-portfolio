import React from 'react'

function Navigation() {
    return (
        <nav>
            <ul className='row'>
                <li className='col'>
                    <a href='/about'>About Me</a>
                </li>
                <li className='col'>
                    <a href='/portfolio'>Portfolio</a>
                </li>
                <li className='col'>
                    <a href='/contact'>Contact</a>
                </li>
                <li className='col'>
                    <a href='/resume'>Resume</a>
                </li>
            </ul>
        </nav>
    )

}

export default Navigation;
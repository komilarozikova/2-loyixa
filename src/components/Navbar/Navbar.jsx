import React from 'react';
import '../Navbar/Navbar.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <nav>
                <div className="navbar-container">
                    <div className="logo">
                        <h1>
                            K. Griffith</h1>
                    </div>
                    <div className="links">
                        <ul>
                            <li>
                                APPEARANCES</li>
                            <li>BOOKS</li>
                            <li>NEWS</li>
                            <li>ABOUT</li>
                            <li>CONTACT</li>
                        </ul>
                    </div>
                </div>
            </nav>
            <hr />
        </div>
    )
}

export default Navbar

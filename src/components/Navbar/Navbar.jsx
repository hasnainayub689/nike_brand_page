import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <div>
            <nav className="navbar container">
                <div className="logo">
                    <img
                        src="https://i.postimg.cc/dVpRTV1T/logo.png"
                        alt="logo"
                        srcset=""
                        width="100px"
                    />
                </div>
                <ul>
                    <li>Home</li>
                    <li>Location</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <button className="btn">Login</button>
            </nav>
        </div>
    );
}

export default Navbar;

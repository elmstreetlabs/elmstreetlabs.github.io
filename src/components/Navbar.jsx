import React from 'react';
import './Navbar.scss';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-logo"> [->] </div>
            <ul className="nav-links">
                {/*<li><a href="#about">pbout</a></li>
                <li><a href="#projects">projects</a></li> */}
                <li><a href="mailto:hello@elmstreetlabs.io">contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;

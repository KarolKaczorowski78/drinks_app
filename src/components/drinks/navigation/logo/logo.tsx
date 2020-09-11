import React from 'react';
import { Link } from 'react-router-dom';
import './logo.scss';

function Logo() {
    return (
        <Link to="/" className="logo-container">
            <i className="fas fa-glass-cheers"></i>
            <span> Drinkery</span>
        </Link>
    )
}

export default Logo;

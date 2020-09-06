import React from 'react'
import MainButton from '../main_button/mainButton';
import { Link } from 'react-router-dom';

const BrowseDrinksButton = () => {

    return (
        <Link to="/drinks" style={{ textDecoration: 'none' }}>
            <MainButton clickScrollValue={ false }>
                Browse drinks!
            </MainButton>
        </Link>
    )
}

export default BrowseDrinksButton;

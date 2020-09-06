import React from 'react';
import { Link } from 'react-router-dom';
import './browse_drinks_button.scss';

const RedirectButton = (props: { targetPage: string, children: string, side: string }) => {
    return (
        <Link className={ `browse-drinks-button ${props.side}-redirect-button` } 
                to={ `/${props.targetPage}` }
        >
            { props.children }
        </Link>
    )
}

export default RedirectButton;

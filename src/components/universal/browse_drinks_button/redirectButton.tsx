import React from 'react';
import { Link } from 'react-router-dom';
import './redirect_button.scss';

const RedirectButton = (props: { targetPage: string, children: string, side: string }) => {
    return (
        <Link className={ `redirect-button redirect-button--${props.side}` } 
                to={ `/${props.targetPage}` }
        >
            { props.children }
        </Link>
    )
}

export default RedirectButton;

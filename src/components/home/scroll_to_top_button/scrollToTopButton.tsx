import React, { useState } from 'react';
import './scroll_to_top_button.scss';

const ScrollToTopButton = () => {

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const [visiblility, setVisibility] = useState<string>('');

    window.addEventListener('scroll', () => {
        if (window.scrollY > window.innerHeight / 2 && visiblility === '') {
            setVisibility('shown');
        } else if (window.scrollY < window.innerHeight / 2 && visiblility === 'shown') {
            setVisibility('');
        }
    })

    return (
        <button onClick={ handleClick } className={ `scroll-to-top-button ${visiblility}` }>
            <i className="fas fa-arrow-up"></i>
        </button>
    )
}

export default ScrollToTopButton;

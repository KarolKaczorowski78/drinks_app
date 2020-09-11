import React, { useState, useEffect } from 'react';
import './contact.scss';
import { Link } from 'react-router-dom';

const Contact = () => {

    const mouseOutIcon: string = "fas fa-envelope";
    const mouseOverIcon: string = "fas fa-envelope-open";

    const [show, setShow] = useState<boolean>(false);
    const [icon, setIcon] = useState<string>(mouseOutIcon);

    const handleMouseOver = () => { setIcon(mouseOverIcon) }

    const handleMouseOut = () => { setIcon(mouseOutIcon) }

    useEffect(() => {
        (() => { setTimeout(() => setShow(true), 4000) })()
    }, []);

    return (
        <Link to='/contact' style={{ textDecoration: 'none' }}>
            <button style={{ opacity: show ? 1 : 0 }} className="contact" 
                    onMouseOut={ handleMouseOut } 
                    onMouseOver={ handleMouseOver }>
                    <i className={ icon }></i>
            </button>
        </Link>
    )
}

export default Contact;

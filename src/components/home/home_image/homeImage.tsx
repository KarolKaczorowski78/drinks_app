import React from 'react'
import './home_image.scss';

const HomeImage = (props: { side: string, src: string }) => {
    return (
        <img className={ `home-image ${props.side}` } src={ props.src } alt="home"/>
    )
}

export default HomeImage;

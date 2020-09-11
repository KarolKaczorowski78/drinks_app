import React, { ReactNode }  from 'react';
import './main_button.scss';

const MainButton = (props: { children: string | ReactNode , clickScrollValue: boolean | number }) => {

    const handleClick = () => {
        typeof props.clickScrollValue === "number" && window.scrollTo({ 
                                            top: window.innerHeight * props.clickScrollValue + 50, 
                                            behavior: 'smooth' });
    }


    return (
        <button onClick={ handleClick } className="main-button">
            { props.children }
        </button>
    )
}

export default MainButton;

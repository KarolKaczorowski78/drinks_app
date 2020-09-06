import React from 'react';
import './show_info_button.scss';

function ShowInfoButton(props: { onClick: () => void }) {
    
    const handleClick = (): void => { props.onClick() }

    return (
        <button onClick={ handleClick } className="show-info-button">
            <i className="fas fa-info-circle"></i>   
        </button>
    )
}

export default ShowInfoButton;

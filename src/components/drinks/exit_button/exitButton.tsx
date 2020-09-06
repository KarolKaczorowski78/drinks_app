import React from 'react'
import './exit_button.scss';

const ExitButton = (props: { exitFunction: () => void }) => {
    return (
        <button onClick={ props.exitFunction } className="exit-button">
            X
        </button>
    )
}

export default ExitButton;

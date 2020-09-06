import React from 'react';
import './sidebar_button.scss';

function SidebarButton(props: { topic: string }) {
    return (
        <button className="sidebar-button">
            { props.topic }
        </button>
    )
}

export default SidebarButton;

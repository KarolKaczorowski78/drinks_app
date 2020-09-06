import React from 'react';
import './social_media.scss';

const SocialMedia = (props: { icon: string }) => {
    return (
        <button className="social-media-button">
            <i className={ props.icon }></i>
        </button>
    )
}

export default SocialMedia;

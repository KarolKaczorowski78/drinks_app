import React from 'react';

const Filter = (props: { src: string, filterName: string }) => {
    return (
        <div className="filters-introduction-container-image-container">
            <div className="filters-introduction-container-image-container-hidden-content">
                <h2>{ props.filterName }</h2>
            </div> 
            <img className="filters-introduction-container-image" src={ props.src } alt=""/>
        </div>
    )
}

export default Filter;

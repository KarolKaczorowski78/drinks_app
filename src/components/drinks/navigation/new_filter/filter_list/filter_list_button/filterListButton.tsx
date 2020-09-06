import React from 'react'
import './filter_list_button.scss';

const FilterListButton = (props: { filterName: string, chosenFilter: string, updateShownFilter: (newState: string) => void }) => {
    console.log(props.chosenFilter);
    return (
        <button className="filter-list-button" onClick={ () => props.updateShownFilter(props.filterName) }>
            <span className="filter-list-button-filter-name">{ props.filterName }</span>
            <span className="filter-list-button-chosen-filter">
                { props.chosenFilter.length !== 0 && `: ${props.chosenFilter}` }</span>
        </button>
    )
}

export default FilterListButton;

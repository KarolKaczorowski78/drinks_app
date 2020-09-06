import React, { useContext } from 'react'
import { FilterContext } from '../../filter';
import './filter_list_button.scss';

const FilterListButton = (props: { filterName: string, chosenFilter: string }) => {

    const contextShit = useContext(FilterContext);

    const handleClick = () => {
        if (contextShit !== null) {
            const { changeChosenFilter, toggleFilterPickerVisibility } = contextShit;
            changeChosenFilter(props.filterName);
            toggleFilterPickerVisibility(true);
        }
    }

    return (
        <button onClick={ handleClick } className="filter-list-button">
            { props.filterName }
            <span style={{ fontSize: '.75rem', display: 'block' }}>{ props.chosenFilter }</span>
        </button>
    )
}

export default FilterListButton;

import React from 'react'
import { updateFilterer } from '../../../../../../recieving_data/filterer';
import './filter_picker_button.scss';

const FilterPickerButton = (props: { filterValue: string, filterName: any, handleClick: () => void }) => {

    const handleClick = () => {
        updateFilterer(props.filterName.toLowerCase(), props.filterValue);
        props.handleClick();
    }

    return (
        <button onClick={ handleClick } className="filter-picker-button">
            { props.filterValue }
        </button>
    )
}

export default FilterPickerButton;

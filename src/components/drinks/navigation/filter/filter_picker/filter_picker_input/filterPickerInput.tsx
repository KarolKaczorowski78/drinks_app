import React, { Dispatch, SetStateAction, ChangeEvent } from 'react';
import './filter_picker_input.scss';

const FilterPickerInput = (props: { setSearch: Dispatch<SetStateAction<string>>, currentFilter: string }) => {

    const handleKeyUp = (event: ChangeEvent<HTMLInputElement>) => {
        props.setSearch(event.target.value.toLowerCase());
    }

    return (
        <input placeholder={ `Find ${props.currentFilter}` } 
               onChange={ e => handleKeyUp(e) } 
               className="filter-picker-input" />
    )
}

export default FilterPickerInput;

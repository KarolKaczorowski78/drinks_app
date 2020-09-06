import React, { useState, ChangeEvent } from 'react'
import './filter_picker_input.scss';

const FilterPickerInput = (props: { currentFilter: string, findFunction: (newState: string) => void }) => {

    const [searchValue, setSearchValue] = useState<string>('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value)
    }

    const handleKeyUp = () => {
        props.findFunction(searchValue.toLowerCase());
    }

    return (
        <input className="filter-picker-input"
               onChange={ handleChange } 
               onKeyUp={ handleKeyUp } 
               type="search" 
               placeholder={`Find ${props.currentFilter}`}/>
    )
}

export default FilterPickerInput;

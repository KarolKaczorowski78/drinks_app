import React, { useContext } from 'react'
import { updateFilterer } from '../../../../../../recieving_data/filterer';
import { FilterContext } from '../../filter';
import Filterer from '../../../../../../recieving_data/filterer';
import './filter_picker_button.scss';

const FilterPickerButton = (props: { value: string }) => {

    const usedContext = useContext(FilterContext);

    const handleClick = () => {
        if (usedContext !== null) {
            const { chosenFilter, changeChosenFilters, toggleFilterPickerVisibility } = usedContext;
            
            updateFilterer(chosenFilter.toLowerCase(), props.value);
            toggleFilterPickerVisibility(false);
            changeChosenFilters(Object.values(Filterer));
        }
    }

    return (
        <button onClick={ handleClick } className="filter-picker-button">
            { props.value }
        </button>
    )
}

export default FilterPickerButton;

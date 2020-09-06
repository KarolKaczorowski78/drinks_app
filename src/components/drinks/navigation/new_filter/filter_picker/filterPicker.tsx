import React, { useEffect, useState } from 'react'
import getFilters from '../../../../../recieving_data/get_requests/get_filters';
import FilterPickerButton from './filter_picker_button/filterPickerButton';
import FilterPickerInput from './filter_picker_input/filterPickerInput';
import ExitButton from '../../../exit_button/exitButton';
import './filter_picker.scss';

const FilterPicker = (props: { shownFilter: string,updateShownFilter: (newState: string) => void, updateChosenFilters: () => void }) => {
    
    const [currentlyShownFilterOptions, setCurrentlyShownFilterOptions] = useState<string[]>([]);
    const [visibilityClass, setVisibilityClass] = useState<string>('');
    const [shownFilterOptionCondition, setShownFilterOptionCondition] = useState<string>('');

    const toggleVisibility = () => {
        setVisibilityClass(visibilityClass === '' ? 'filter-picker-shown' : '');
    }

    const handleFilterButtonClick = () => {
        props.updateShownFilter('');
        props.updateChosenFilters();
        toggleVisibility();
    }

    useEffect(() => {
        props.shownFilter !== '' && (async () => {
            const options = await getFilters(props.shownFilter);
            setCurrentlyShownFilterOptions([...options]);
            toggleVisibility();
        })();
    }, [props.shownFilter])
    
    return (
        <div className={`filter-picker ${visibilityClass}`}>
            <ExitButton exitFunction={ () => { console.log('Clicked') } } />
            <FilterPickerInput 
                currentFilter={ props.shownFilter } 
                findFunction={ setShownFilterOptionCondition } />
            { currentlyShownFilterOptions.map(option => option.toLowerCase().includes(shownFilterOptionCondition) &&
                                        <FilterPickerButton filterName={ props.shownFilter } 
                                                            filterValue={ option } 
                                                            handleClick={ handleFilterButtonClick }/> )}
        </div>
    )
}

export default FilterPicker;

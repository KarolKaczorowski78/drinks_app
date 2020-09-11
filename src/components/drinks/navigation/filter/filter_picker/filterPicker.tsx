import React, { useEffect, useState, useContext, Dispatch, SetStateAction } from 'react'
import getFilters from '../../../../../recieving_data/get_requests/getFilters';
import FilterPickerButton from './filter_picker_button/filterPickerButton';
import FilterPickerInput from './filter_picker_input/filterPickerInput';
import ExitButton from '../../../exit_button/exitButton';
import { FilterContext } from '../filter';
import FetchedFilters from './utils/fetchedFilters';
import './filter_picker.scss';

const FilterPicker = (props: { visible: boolean, setVisibility: Dispatch<SetStateAction<boolean>> }) => {

    const usedContext = useContext(FilterContext);

    const [options, setOptions] = useState<string[]>([])
    const [searchValue, setSearchValue] = useState<string>('');

    const recieveOptions = async (): Promise<void> => {
        if (usedContext !== null && usedContext.chosenFilter.length > 0) {
            const { chosenFilter } = usedContext;
            !Object.keys(FetchedFilters).includes(chosenFilter) ? 
                getFilterOptions(chosenFilter) : setOptions(FetchedFilters[chosenFilter]);         
        }
    }

    const getFilterOptions = async (chosenFilter: string) => {
        const newOptions = await getFilters(chosenFilter);
        FetchedFilters[chosenFilter] = newOptions;
        setOptions(newOptions);
    }

    useEffect(() => {
       props.visible && recieveOptions();
    });
    
    return (
        <div style={{ display: (props.visible ? 'flex' : 'none') }} className="filter-picker">
            <ExitButton exitFunction={ () => props.setVisibility(false) } />
            <FilterPickerInput setSearch={ setSearchValue } currentFilter={ usedContext?.chosenFilter } />
            { options.map((option, i) => 
            (option.toLowerCase().includes(searchValue) && option.length > 0 ) && 
                                <FilterPickerButton value={ option } key={ i } />) }
        </div>
    )
}

export default FilterPicker;

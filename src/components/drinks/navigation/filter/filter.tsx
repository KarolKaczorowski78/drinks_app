import React, { useState, createContext, SetStateAction, Dispatch } from 'react';
import FilterPicker from './filter_picker/filterPicker';
import FilterList from './filter_list/filterList';
import Filterer from '../../../../recieving_data/filterer';
import './filter.scss';

export const FilterContext = createContext<contextInterface | null>(null);

const Filter = () => {

    const initialChosenFilters: string[] = Object.values(Filterer);

    const [chosenFilter, setChosenFilter] = useState('');
    const [chosenFilters, setChosenFilters] = useState<string[]>(initialChosenFilters);
    const [filterPickerVisibility, setFilterPickerVisibility] = useState<boolean>(false);

    const providerValue = { 
        changeChosenFilter: setChosenFilter, 
        changeChosenFilters: setChosenFilters,
        toggleFilterPickerVisibility: setFilterPickerVisibility,
        chosenFilter: chosenFilter, 
        chosenFilters: chosenFilters 
    }

    return (
        <div className="filter">
            <i className="filter-icon fas fa-sort-amount-down"></i>
            <FilterContext.Provider value={ providerValue }>
                <FilterPicker visible={ filterPickerVisibility } setVisibility={ setFilterPickerVisibility } />
                <FilterList /> 
            </FilterContext.Provider>                  
        </div>
    )
}

interface contextInterface {
    changeChosenFilter: Dispatch<SetStateAction<string>>;
    changeChosenFilters: Dispatch<SetStateAction<string[]>>;
    toggleFilterPickerVisibility: Dispatch<SetStateAction<boolean>>;
    chosenFilter: any;
    chosenFilters: string[];
}

export default Filter;

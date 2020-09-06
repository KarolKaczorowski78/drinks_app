import React, { useState } from 'react';
import FilterPicker from './filter_picker/filterPicker';
import FilterList from './filter_list/filterList';
import Filterer from '../../../../recieving_data/filterer';
import './filter.scss';

const Filter = () => {

    const defaultChosenFilters: string[] = Object.values(Filterer);
    const [chosenFilters, setChosenFilters] = useState<string[]>(defaultChosenFilters);

    const [currentlyShownFilters, setCurrentlyShownFilters] = useState<string>('');

    const updateChosenFilters = () => {
        setChosenFilters(Object.values(Filterer));
    }

    return (
        <div className="filter">
            <i className="filter-icon fas fa-sort-amount-down"></i>
            <FilterPicker 
                updateChosenFilters={ updateChosenFilters } 
                shownFilter={ currentlyShownFilters } 
                updateShownFilter={ setCurrentlyShownFilters }/>
            <FilterList updateShownFilter={ setCurrentlyShownFilters } 
                        updateChosenFilters={ updateChosenFilters }
                        chosenFilters={ chosenFilters } />
                        
        </div>
    )
}

export default Filter;

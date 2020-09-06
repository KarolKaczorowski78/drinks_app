import React, { useContext, useState, useEffect } from 'react';
import { FilterContext } from '../filter';
import FilterListButton from './filter_list_button/filterListButton';
import ConfirmFilterButton from './confirm_fillter_button/confirmFilterButton';
import ClearFiltersButton from './clear_filters_button/clearFiltersButton';
import Filterer from '../../../../../recieving_data/filterer';
import capitalizeWord from '../../../../../universal/ts/capitalizeWord';
import './filter_list.scss';

const FilterList = () => {

    const usedContext = useContext(FilterContext);
    const [chosenFiltersState , setChosenFiltersState] = useState<string[]>(['', '', '', '']);

    useEffect(() => {
        usedContext !== null && setChosenFiltersState(usedContext.chosenFilters);
    }, [usedContext]);

    useEffect(() => {
        setChosenFiltersState(Object.values(Filterer));
    }, [])

    return (
        <div className="filter-list-container">
            <ConfirmFilterButton />
            { chosenFiltersState.map((s, i) => <FilterListButton 
                                    key={ i }
                                    filterName={ capitalizeWord(Object.keys(Filterer)[i]) } 
                                    chosenFilter={ s } />) } 
            <ClearFiltersButton />
        </div>
    )
}

export default FilterList;

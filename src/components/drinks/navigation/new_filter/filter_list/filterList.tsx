import React, { SetStateAction, Dispatch } from 'react';
import FilterListButton from './filter_list_button/filterListButton';
import ConfirmFilterButton from './confirm_fillter_button/confirmFilterButton';
import ClearFiltersButton from './clear_filters_button/clearFiltersButton';
import './filter_list.scss';

const FilterList = (props: { updateShownFilter: Dispatch<SetStateAction<string>>, chosenFilters: string[], updateChosenFilters: () => void  }) => {
    
    const filterNames = ['Category', 'Ingredient', 'Alcoholic', 'Glass']

    return (
        <div className="filter-list-container">
            <ConfirmFilterButton />
            { props.chosenFilters.map((filter, i) => 
                <FilterListButton filterName={ filterNames[i] } 
                                  chosenFilter={ filter } 
                                  updateShownFilter={ props.updateShownFilter } />) }
            <ClearFiltersButton updateChosenFilters={ props.updateChosenFilters } />
        </div>
    )
}

export default FilterList;

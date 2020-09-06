import React, { useContext } from 'react'
import { FilterContext } from '../../filter';
import { clearFilterer } from '../../../../../../recieving_data/filterer';
import '../filter_list_button/filter_list_button.scss';
import './clear_filters_button.scss';

const ClearFiltersButton = () => {

    const usedContext = useContext(FilterContext);

    const handleClick = () => {
        clearFilterer();
        usedContext !== null && usedContext.changeChosenFilters(['', '', '', '']);
    }

    return (
        <button onClick={ handleClick } className="filter-list-button clear-filters-button">
            <span>Clear filters  </span> 
            <i className="fas fa-broom"></i>
        </button>
    )
}

export default ClearFiltersButton;

import React, { useContext, useState, useEffect } from 'react';
import { FilterContext } from '../filter';
import Filterer from '../../../../../recieving_data/filterer'
import ImageCategory from '../../../../../img/CategoryImg.jpg';
import ImageAlcoholic from '../../../../../img/AlcoholicImg.jpg';
import ImageIngredient from '../../../../../img/IngredientImg.jpg';
import ImageGlass from '../../../../../img/GlassImg.jpg';
import FilterButton from './filter_button/filterButton';
import './filter_list.scss';

const FilterList = () => {

    const usedContext = useContext(FilterContext);
    const [chosenFiltersState , setChosenFiltersState] = useState<string[]>(['', '', '', '']);

    const imgs = [ImageCategory, ImageIngredient, ImageAlcoholic, ImageGlass];

    useEffect(() => {
        usedContext !== null && setChosenFiltersState(usedContext.chosenFilters);
    }, [usedContext]);

    useEffect(() => {
        setChosenFiltersState(Object.values(Filterer));
    }, [])

    return (
        <div className="filter-list-container">
            { imgs.map((img, i) => <FilterButton 
                filterName={ Object.keys(Filterer)[i] }
                chosenFilter={ chosenFiltersState[i] }
                imgSrc={ img } />) }
        </div>
    )
}

export default FilterList;

import React, { useContext } from 'react'
import { updateFilterer } from '../../../../../../recieving_data/filterer';
import { FilterContext } from '../../filter';
import Filterer from '../../../../../../recieving_data/filterer';
import { DisplayedDrinksContext } from '../../../../../../pages/drinks';
import getCocktailsByFilter from '../../../../../../recieving_data/get_requests/getCocktailsByFilters';
import './filter_picker_button.scss';

const FilterPickerButton = (props: { value: string }) => {

    const usedContext = useContext(FilterContext);
    const drinksContext = useContext(DisplayedDrinksContext);

    const handleClick = () => {
        (usedContext && drinksContext) && (async() => {
            const { chosenFilter, changeChosenFilters, toggleFilterPickerVisibility } = usedContext;

            updateFilterer(chosenFilter.toLowerCase(), props.value);
            toggleFilterPickerVisibility(false);
            changeChosenFilters(Object.values(Filterer));

            const newDrinks = await getCocktailsByFilter();
            drinksContext.updateDrinks(newDrinks);
        })()
    }

    return (
        <button onClick={ handleClick } className="filter-picker-button">
            { props.value }
        </button>
    )
}

export default FilterPickerButton;

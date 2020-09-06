import React, { useContext } from 'react';
// import getCocktailsByFilter from '../../../../../../recieving_data/get_requests/get_cocktails_by_filter';
import { DisplayedDrinksContext } from '../../../../../../pages/drinks';
import getCocktailsByFilter from '../../../../../../recieving_data/get_requests/get_cocktails_by_filter_2';
import './confirm_filter_button.scss';
import '../filter_list_button/filter_list_button.scss';
import Filterer from '../../../../../../recieving_data/filterer';
import getCocktailByName from '../../../../../../recieving_data/get_requests/get_cocktail_by_name';

const ConfirmFilterButton = () => {

    const usedContext = useContext(DisplayedDrinksContext)

    const handleClick = async () => {
        const recivedCocktails = Array.from(new Set(Object.values(Filterer))).length > 1 ?
                await getCocktailsByFilter() : await getCocktailByName('');
        
        usedContext.updateDrinks(recivedCocktails);
    }

    return (
        <button onClick={ handleClick } className="filter-list-button confirm-filter-button">
            <span>Filter  </span>  
            <i className="fas fa-sync-alt"></i> 
        </button>
    )
}

export default ConfirmFilterButton;

import React, { useContext } from 'react';
import getCocktailsByFilter from '../../../../../../recieving_data/get_requests/get_cocktails_by_filter';
import { DisplayedDrinksContext } from '../../../../../../pages/drinks';
import './confirm_filter_button.scss';
import '../filter_list_button/filter_list_button.scss';

const ConfirmFilterButton = () => {

    const sendDrinks = useContext(DisplayedDrinksContext)

    const handleClick = async () => {
        const recivedDrinks = await getCocktailsByFilter();
        sendDrinks.updateDrinks(recivedDrinks);
    }

    return (
        <button onClick={ handleClick } className="filter-list-button confirm-filter-button">
            <span>Filter  </span>  
            <i className="fas fa-sync-alt"></i> 
        </button>
    )
}

export default ConfirmFilterButton;

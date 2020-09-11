import React, { useRef, useContext } from 'react';
import { DisplayedDrinksContext } from '../../../../pages/drinks';
import getCocktailByName from '../../../../recieving_data/get_requests/getCocktailsByName';
import './searcher.scss';

const Searcher = () => {

    const searchInput = useRef<HTMLInputElement>(null);
    const sendDrinks = useContext(DisplayedDrinksContext);

    const handleClick = async () => {
        const { updateDrinks } = sendDrinks;
        updateDrinks(searchInput.current !== null ? 
            await getCocktailByName(searchInput.current.value) : [])
    }

    return (
        <form className="search-form" onSubmit={ event => event.preventDefault()}>
                <input ref={ searchInput } placeholder="Find by name" className="search-form-input" type="text" />
                <button className="search-form-submit" onClick={ handleClick }>
                    <i className="fa fa-search"></i>
                </button>
        </form>
    )
}

export default Searcher;

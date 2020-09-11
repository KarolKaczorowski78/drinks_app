import React from 'react';
import IngredientsList from './ingredients_list/ingredientsList';
import { usePalette } from 'react-palette';
import { Link } from 'react-router-dom';
import './drink.scss';

function Drink(props: {  details: string[], ingredients: string[] }) {

    const [idDrink, strDrink, strAlcoholic, strCategory, strDrinkThumb] = props.details;
    const { data } = usePalette(strDrinkThumb);

    return (
        <div className="drink" 
        style={{ background: data.lightVibrant, color: data.darkVibrant }}>
            <img className="drink-image" src={ strDrinkThumb } alt={ strDrink } />
            <h3 className="drink-name-container">{ strDrink }</h3>
            <button style={{ background: data.darkVibrant }} className="drink-ingredients">
                <span>Ingredients</span> 
                <IngredientsList background={ data.darkVibrant } ingredients={ props.ingredients } />
            </button>
            <Link to={`drinks/${idDrink}`}>
                <button style={{ background: data.vibrant }} className="drink-details">
                    <span>More details</span> 
                </button>
            </Link> 
        </div>
    )
}

export default Drink;

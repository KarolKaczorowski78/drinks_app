import React, { useState, ReactNode, useEffect } from 'react';
import getCocktailById from '../recieving_data/get_requests/get_cocktail_by_id';
import DetailedDrink from '../components/drink_details/detailed_drink/detailedDrink';
import prepareIngredients from '../universal/ts/prepare_ingredients';
import RedirectButton from '../components/universal/browse_drinks_button/browseDrinksButton';
import { useParams } from 'react-router-dom';
import '../components/drink_details/drink_details.scss';

const DrinkDetails = () => {

    const { id } = useParams();
    const [componentDidMount, setComponentDidMount] = useState<boolean>(false);
    const [drinkDetails, setDrinkDetails] = useState<ReactNode>
        (<h1><i className="fas fa-spinner"></i> Loading drink </h1>);

    useEffect(() => {
        !componentDidMount && (async () => {
            const drink = await getCocktailById(id);
            const ingredients = prepareIngredients(drink);

            const { strDrink,strAlcoholic,
                    strCategory,strDrinkThumb,strInstructions } = drink;

            setComponentDidMount(true);
            setDrinkDetails(<DetailedDrink details={ [strDrink, strCategory, 
                                                    strAlcoholic, strDrinkThumb, 
                                                    strInstructions] } 
                                                    ingredients={ ingredients } />)

        })()
    });

    return (
        <div className="drink-details-container">
            <RedirectButton targetPage="drinks" side="left">Browse drinks</RedirectButton>
            { drinkDetails }
        </div>
    )
}

export default DrinkDetails;

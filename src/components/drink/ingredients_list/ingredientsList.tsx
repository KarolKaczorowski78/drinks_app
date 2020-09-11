import React from 'react';
import './ingredients_list.scss';

const IngredientsList = (props: { ingredients: string[], background: string | undefined }) => {

    return (
        <ul style={{ background: props.background }} className={ `drink-ingredients-list` }>
            { props.ingredients.map((ingredient, i) => 
                                    ingredient.length > 0 && <li key={ i }>{ ingredient }</li>) }
        </ul>
    )
}

export default IngredientsList;

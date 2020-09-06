import React from 'react';
import { usePalette } from 'react-palette';
import './detailed_drink.scss';

const DetailedDrink = (props: { details: any[], ingredients: string[] }) => {

    const [name, category, alcoholic, img, instruction] = props.details;
    const { data } = usePalette(img);

    return (
        <div className="detailed-drink" style={{ color: data.darkVibrant, background: data.lightVibrant, boxShadow: `0px 0px 90px 10px ${data.vibrant}` }}>
            <img src={ img } alt=""/>
            <div className="detailed-drink-details">
                <h1>{ name }</h1>
                <h3>{ `${alcoholic} ${category.toLowerCase()}` }</h3>
                <h2>Ingredients</h2>
                <ul>
                    { props.ingredients.map((ingredient, i) => 
                        <li key={ i }>{ ingredient }</li>) }
                </ul>
                <h2>Instruction</h2>
                <p>{ instruction }</p>
            </div>
        </div>
    )
}

export default DetailedDrink;

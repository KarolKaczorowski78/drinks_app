import React, { useState, useEffect, ReactNode } from 'react';
import { usePalette } from 'react-palette';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import './drink.scss';

function Drink(props: {  details: string[], ingredients: string[] }) {

    const [ref, inView, entry] = useInView({ 
        triggerOnce: true,
        threshold: .2
    });
    const [idDrink, strDrink, strDrinkThumb] = props.details;
    const [src, setSrc] = useState<string>('');

    const { data } = usePalette(strDrinkThumb);

    useEffect(() => {
        (entry && inView) && (() => {
            setSrc(strDrinkThumb);
            entry.target.classList.add('drink--shown');
        })() 
    })

    const renderIngredients = (): ReactNode => {
        const ingredients: ReactNode[] = props.ingredients.map(i => <li>{ i }</li>)

        return ingredients.length > 5 ? [...ingredients.slice(0, 5), '...'] : ingredients;
    }

    return (
        <div style={{ border: `2px solid ${data.lightMuted}` }} className="drink" ref={ ref }> 
            <div className="drink__container-absolute">
                <img className="drink__image" src={ src } alt={ strDrink } />
                <div className="drink__data" style={{ background: `linear-gradient(to left, ${data.lightVibrant}, ${data.darkVibrant}, ${data.lightVibrant})` }}>
                    <h3>{ strDrink }</h3>
                    <h4>Ingredients</h4>
                    <ul className="drink__ingredients-list">
                        { renderIngredients() }
                    </ul>
                    <Link to={`drinks/${idDrink}`} style={{ color: data.lightVibrant }}>
                        Details
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Drink;

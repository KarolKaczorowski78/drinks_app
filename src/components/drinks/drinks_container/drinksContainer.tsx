import React, { ReactNode, useState, useEffect } from 'react';
import Drink from '../new_drink/drink';
import { RecivingDataDrink } from '../new_drink/drinkInterface';
import prepareIngredients from '../../../universal/ts/prepare_ingredients';
import './drinks_container.scss';

const DrinksContainer = (props: { drinks: RecivingDataDrink[] }) => {

    const prepareDrinks = (drinksArray: RecivingDataDrink[]): ReactNode[] => 
        drinksArray.map((drink, i) => {
            const { idDrink, strDrink, strDrinkThumb } = drink;
            const ingredients: string[] = prepareIngredients(drink);
            const details = [idDrink, strDrink, strDrinkThumb];
            return  <Drink details={ details } ingredients={ ingredients } key={ `${i}` } />
        });

    const [ammountOfShownDrinks, setAmmountOfShownDrinks] = useState<number>(15);
    const [isSubscribed, setSubscribed] = useState<boolean>(false);
    const [drinks, setDrinks] = useState<ReactNode[]>([]);

    const handleScroll = () => {
        const el: HTMLDivElement | null = document.querySelector('.drinks-container');
        if (el !== null) {
            const scrollH = el.scrollHeight - el.clientHeight;
            el.scrollTop >= scrollH && setAmmountOfShownDrinks(ammountOfShownDrinks + 15);
            setSubscribed(true);
        }
    }

    const showMoreDrinks = () => {
        setSubscribed(true);
        (isSubscribed && drinks.length !== props.drinks.length) && 
            setDrinks(prepareDrinks(props.drinks.slice(0, ammountOfShownDrinks)));
        setSubscribed(false);
    }

    useEffect(() => {
        showMoreDrinks();
    }, [ammountOfShownDrinks, props.drinks]);

    useEffect(() => {
        setDrinks([]);
        setAmmountOfShownDrinks(15);
    }, [props.drinks]);

    return (
        <div onScroll={ handleScroll } className="drinks-container">
            { drinks.length === 0 ? prepareDrinks(props.drinks.slice(0, 15)) : drinks }
        </div>
    )
}

export default DrinksContainer;

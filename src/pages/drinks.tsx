import React, { FC, useState, useEffect, createContext } from 'react';
import Navigation from '../components/drinks/navigation/navigation';
import DrinksContainer from '../components/drinks/drinks_container/drinksContainer';
import getCocktailByName, { Drink } from '../recieving_data/get_requests/get_cocktail_by_name';
import getCocktailsByFilter from '../recieving_data/get_requests/get_cocktails_by_filter_2';
import Filterer from '../recieving_data/filterer';

export const DisplayedDrinksContext = createContext<{ 
        updateDrinks: (drinks: Drink[]) => void 
    }>({ updateDrinks: (drinks: Drink[]) => {  } });

const Drinks: FC = () => {
 
    const [displayedDrinks, setDisplayedDrinks] = useState<Drink[]>([]);
    const [componentDidMount, setComponentDidMount] = useState<boolean>(false);

    const changeDisplayedDrinks = (drinks: Drink[]): void => {
        setDisplayedDrinks([...drinks]);
    }

    const initialGetDrinks = async (): Promise<void> => {
        setComponentDidMount(true);

        const initialDisplayedDrinks = 
            Object.values(Filterer).find(val => val.length > 0) !== undefined ?
                await getCocktailsByFilter() : await getCocktailByName('');

        changeDisplayedDrinks(initialDisplayedDrinks);
    }

    useEffect(() => {
        !componentDidMount && initialGetDrinks();
    });

    return (    
        <>
            <DisplayedDrinksContext.Provider value={{ updateDrinks: changeDisplayedDrinks }}>
                <Navigation />
                <DrinksContainer drinks={ displayedDrinks } />
            </DisplayedDrinksContext.Provider>
        </>
    )
}


export default Drinks;
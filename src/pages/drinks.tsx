import React, { FC, useState, useEffect, createContext } from 'react';
import Navigation from '../components/drinks/navigation/navigation';
import DrinksContainer from '../components/drinks/drinks_container/drinksContainer';
import { RecivingDataDrink } from '../components/drinks/new_drink/drinkInterface';
import getCocktailByName from '../recieving_data/get_requests/getCocktailsByName';
import getCocktailsByFilter from '../recieving_data/get_requests/getCocktailsByFilters';
import Filterer from '../recieving_data/filterer';

export const DisplayedDrinksContext = createContext<{ 
        updateDrinks: (drinks: RecivingDataDrink[]) => void 
    }>({ updateDrinks: (drinks: RecivingDataDrink[]) => {  } });

const Drinks: FC = () => {
 
    const [displayedDrinks, setDisplayedDrinks] = useState<RecivingDataDrink[]>([]);
    const [componentDidMount, setComponentDidMount] = useState<boolean>(false);

    const changeDisplayedDrinks = (drinks: RecivingDataDrink[]): void => {
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
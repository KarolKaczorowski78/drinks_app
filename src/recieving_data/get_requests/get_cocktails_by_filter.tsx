import Filterer from '../filterer';
import getCocktails from './get_cocktails';
import getCocktailByName, { Drink } from './get_cocktail_by_name';

const getCocktailsByFilter = async (): Promise<Drink[]> => {
    const filters: string[][] = Object.entries(Filterer).filter(([key, value]) => value !== '');
    const result =  filters.length > 0 ? await filterDrinks(filters) : await getCocktailByName('');
    return result;
}


const filterDrinks = async (filters: string[][]) => {

    const drinksFromAllFiltersPromise: Promise<Drink[]>[] = 
        filters.map(async ([key, value]) => await getCocktails('filter', key.charAt(0), value));
    
    const drinksFromAllFilters: Drink[] = (await Promise.all(drinksFromAllFiltersPromise)).flat();

    const drinksThatFitCondition: Drink[] = drinksFromAllFilters.filter(drink => 
                            isFillingTheCondition(drink, drinksFromAllFilters, filters.length));

    const drinks: Drink[] = (await Promise.all(drinksThatFitCondition.map(async ({ strDrink }) => 
        (await getCocktailByName(strDrink))[0]))).flat();

    return drinks;
}


const isFillingTheCondition = (item: Drink, arr: Drink[], ammountOfConditions: number): boolean => {
    let count: number = 0;

    for (let i = 0; i < arr.length; i++) {
        arr[i].strDrink.toLowerCase() === item.strDrink.toLowerCase() && count++;
    }

    count === ammountOfConditions && arr.splice(arr.indexOf(item), 1); // to avoid repetitions
    return count === ammountOfConditions;
}


export default getCocktailsByFilter;
import getCocktails from './get_cocktails';
import Filterer from '../filterer';
import { RecivingDataDrink } from '../../components/drinks/new_drink/drinkInterface';
import getCocktailByName from './getCocktailsByName';

const getCockailsByFilter = async (): Promise<RecivingDataDrink[]> => {
    const filters: string[][] = 
    Object.entries(Filterer).filter(([ k, v ]) => v.length > 0);

    return filters.length > 0 ? (async() => {
        const cocktailNamesAllFilters: string[] = await getCocktailNamesForEachFilter(filters);
        const cocktailNamesThatFitConditons: string[] = getCocktailsThatFitTheCondition(cocktailNamesAllFilters, filters);
        return (await Promise.all(cocktailNamesThatFitConditons.map(async name => 
            await getCocktailByName(name)))).flat();
    })() : await getCocktailByName('');
}

const getCocktailNamesForEachFilter = async (filters: string[][]): Promise<string[]> => 
(await Promise.all(filters.map(async ([key, value]) => await getCocktails('filter', key.charAt(0), value))))
.flat().map(({ strDrink }) => strDrink).sort();

const getCocktailsThatFitTheCondition = (drinks: string[], filters: string[][]): string[] => 
    drinks.filter((drink, i) =>
        (i !== drinks.length - 1 && drinks.slice(i, i + filters.length).every(d => d === drink)))


export default getCockailsByFilter;
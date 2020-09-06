import getCocktails from './get_cocktails';
import Filterer from '../filterer';

const getCockailsByFilter = async (): Promise<void> => {
    const filters: string[][] = 
    Object.entries(Filterer).filter(([ k, v ]) => v.length > 0);

    const cocktailNamesAllFilters: string[] = await getCocktailNamesForEachFilter(filters);
    const cocktailNamesThatFitConditons: string[] = getCocktailsThatFitTheCondition(cocktailNamesAllFilters, filters);
}

const getCocktailNamesForEachFilter = async (filters: string[][]): Promise<string[]> => 
(await Promise.all(filters.map(async ([key, value]) => await getCocktails('filter', key.charAt(0), value))))
.flat().map(({ strDrink }) => strDrink).sort();

const getCocktailsThatFitTheCondition = (drinks: string[], filters: string[][]): string[] => 
    drinks.filter((drink, i) =>
        (i !== drinks.length - 1 && drinks.slice(i, i + filters.length).every(d => d === drink)))


export default getCockailsByFilter;
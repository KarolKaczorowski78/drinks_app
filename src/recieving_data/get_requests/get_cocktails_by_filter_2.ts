import getCocktails from './get_cocktails';
import Filterer, { FiltererProp } from '../filterer';
import getCocktailByName from './get_cocktail_by_name';
import prepareIngredients from '../../universal/ts/prepare_ingredients';

const getCocktailsByFilter = async () => {
    const filters: FiltererProp[][] = Object.entries(Filterer).filter(([k, v]) => v.length > 0);
    
    const firstFilterDrinks = 
        (await getCocktails('filter', filters[0][0].charAt(0), filters[0][1])
            .then(async (drinksArray) => await Promise.all(drinksArray.map(async ({ strDrink }) => 
            (await getCocktailByName(strDrink))[0])))).flat().flat();

    const drinksThatFitConditions = firstFilterDrinks.filter((drink) => {
        const { category, ingredient, alcoholic, glass } = Filterer;
        const { strCategory, strAlcoholic, strGlass } = drink;
        const ingredients = prepareIngredients(drink);

        return (category.toLowerCase().includes(strCategory.toLowerCase())
            && ingredient.length > 0 ? ingredients.includes(ingredient) : true
            && strGlass.toLowerCase().includes(glass.toLowerCase())
            && alcoholic.length > 0 ? alcoholic.toLowerCase().startsWith(strAlcoholic.toLowerCase()) : true)});

    return drinksThatFitConditions;    
}

export default getCocktailsByFilter;
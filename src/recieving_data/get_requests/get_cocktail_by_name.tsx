import getCocktails from './get_cocktails';
import Drink from '../../components/drinks/drink/drink';

const getCocktailByName = (name: string): Promise<Drink[]> => 
    getCocktails('search', 's', name)
    .then((drinksArray: Drink[]) => drinksArray.map((drink) => drink))
    .catch(err => []);


export interface Drink {
    idDrink: string;
    strDrink: string;
    strAlcoholic: string;
    strGlass: string;
    strCategory: string;
    strDrinkThumb: string;
    ingredients: string[];
    strInstructions?: string;
}

export default getCocktailByName;
import getCocktails from './get_cocktails';
import { Drink } from './get_cocktail_by_name';

const getCocktailById = (id: string): Promise<Drink> => 
    getCocktails('lookup', 'i', id)
    .then(([drink]) => drink);   


export default getCocktailById;

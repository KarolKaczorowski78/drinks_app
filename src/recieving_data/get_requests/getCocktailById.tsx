import getCocktails from './get_cocktails';
import { RecivingDataDrink } from '../../components/drinks/new_drink/drinkInterface';

const getCocktailById = (id: string): Promise<RecivingDataDrink> => 
    getCocktails('lookup', 'i', id)
    .then(([drink]) => drink);   


export default getCocktailById;

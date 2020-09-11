import getCocktails from './get_cocktails';
import { RecivingDataDrink } from '../../components/drinks/new_drink/drinkInterface';

const getCocktailByName = (name: string): Promise<RecivingDataDrink[]> => 
    getCocktails('search', 's', name)
    .then((drinksArray: RecivingDataDrink[]) => drinksArray.map((drink) => drink))
    .catch(err => []);

export default getCocktailByName;
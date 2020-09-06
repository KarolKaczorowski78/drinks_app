import { Drink } from '../../recieving_data/get_requests/get_cocktail_by_name';

const prepareIngredients = (drink: Drink): string[] => Object.entries(drink).filter(([key, value]) => 
(key.includes('strIngredient') && value !== null && value.length > 0)).map(entry => entry[1]);

export default prepareIngredients;
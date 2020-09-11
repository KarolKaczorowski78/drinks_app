import { RecivingDataDrink } from '../../components/drinks/new_drink/drinkInterface';;

const prepareIngredients = (drink: RecivingDataDrink): string[] => Object.entries(drink).filter(([key, value]) => 
(key.includes('strIngredient') && value !== null && value.length > 0)).map(entry => entry[1]);

export default prepareIngredients;
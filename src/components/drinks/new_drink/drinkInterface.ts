export default interface DrinkInterface {
    strDrink: string;
    strAlcoholic: string;
    strCategory: string;
    strDrinkThumb: string;
}

export interface RecivingDataDrink {
    idDrink: string;
    strDrink: string;
    strAlcoholic: string;
    strGlass: string;
    strCategory: string;
    strDrinkThumb: string;
    ingredients: string[];
    strInstructions?: string;
}
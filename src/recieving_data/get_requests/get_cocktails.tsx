import { RecivingDataDrink } from '../../components/drinks/new_drink/drinkInterface';
import apiKey from '../../universal/ts/apiKey';

const getCocktails = async (method: string, query: string, value: string): Promise<RecivingDataDrink[]> => {
    try {
        const data: Response = await fetch(`https://the-cocktail-db.p.rapidapi.com/${method}.php?${query}=${value}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
                "x-rapidapi-key": apiKey
            }
        });
        const json = await data.json();
        const drinks: RecivingDataDrink[] = json[Object.keys(json)[0]];

        return drinks;
    }
    catch(err) {
        return err;
    }

}

export default getCocktails;
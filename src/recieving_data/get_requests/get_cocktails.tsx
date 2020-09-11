import { RecivingDataDrink } from '../../components/drinks/new_drink/drinkInterface';

const getCocktails = async (method: string, query: string, value: string): Promise<RecivingDataDrink[]> => {
    try {
        const data: Response = await fetch(`https://the-cocktail-db.p.rapidapi.com/${method}.php?${query}=${value}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
                "x-rapidapi-key": "4d50f7c52amsh2ec8508c35a7811p1c477ajsn875d8e36fd67"
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
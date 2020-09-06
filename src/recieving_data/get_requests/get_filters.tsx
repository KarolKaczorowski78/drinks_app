import getCocktails from './get_cocktails';

const getFilter = (filterName: string): Promise<string[]> => 
    getCocktails('list', filterName.charAt(0).toLowerCase(), "list")
    .then(arr => arr.map(drink => Object.values(drink)[0]));


export default getFilter;
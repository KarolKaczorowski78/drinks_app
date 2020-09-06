const Filterer: FiltererInterface = {
    category: '',
    ingredient: '',
    alcoholic: '',
    glass: '',
}

export type FiltererProp = keyof FiltererInterface;

export const updateFilterer = (propName: FiltererProp, value: string): void => {
    Filterer[propName] = value;
}

export const clearFilterer = (): void => {
    Object.keys(Filterer).forEach((key: any) => updateFilterer(key, ''));
}

interface FiltererInterface {
    category: string;
    ingredient: string;
    alcoholic: string;
    glass: string;
}

export default Filterer;
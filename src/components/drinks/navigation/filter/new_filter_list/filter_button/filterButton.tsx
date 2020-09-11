import React, { useContext } from 'react';
import { FilterContext } from '../../filter';
import { DisplayedDrinksContext } from '../../../../../../pages/drinks';
import Filterer, { updateFilterer, FiltererProp } from '../../../../../../recieving_data/filterer';
import getCocktailsByFilter from '../../../../../../recieving_data/get_requests/getCocktailsByFilters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackspace } from '@fortawesome/free-solid-svg-icons';
import './filter_button.scss';

const Filterbutton = (props: props) => {

    const usedContext = useContext(FilterContext);
    const anotherContext = useContext(DisplayedDrinksContext);

    const handleClick = () => {
        if (usedContext) {
            const { changeChosenFilter, toggleFilterPickerVisibility } = usedContext;
            changeChosenFilter(props.filterName);
            toggleFilterPickerVisibility(true);
        }
    }

    const handleClick2 = () => {

        (usedContext && Object.keys(Filterer).includes(props.filterName)) && (async () => {
            const newProp = props.filterName as FiltererProp;
            updateFilterer(newProp, '');
            usedContext.changeChosenFilters(state => {
                state.splice(Object.keys(Filterer).indexOf(newProp), 1, '')
                return state;
            }) 
            const newStuff = await getCocktailsByFilter();
            anotherContext.updateDrinks(newStuff);
        })()
    }

    return (
        <button className="filter-button">
            <div className="filter-button__name-container" onClick={ handleClick }>
                { props.filterName }
                <span className="chosen-filter">{ props.chosenFilter }</span>
            </div>
            <img className="filter-button__image" src={ props.imgSrc } alt=""/>
            { (props.chosenFilter && props.chosenFilter.length > 0) &&
            <button onClick={ handleClick2 } className="filter-button__clear-button">
                <FontAwesomeIcon icon={ faBackspace } />
            </button> 
            }
        </button>
    )
}

interface props {
    imgSrc: string;
    filterName: string;
    chosenFilter: string;
}

export default Filterbutton

import React from 'react'
import ImageCategory from '../../../img/CategoryImg.jpg';
import ImageAlcoholic from '../../../img/AlcoholicImg.jpg';
import ImageIngredient from '../../../img/IngredientImg.jpg';
import ImageGlass from '../../../img/GlassImg.jpg';
import Filter from './filter';
import './filters.scss';

const Filters = () => {
    return (
        <div className="filters-introduction-container">
            <Filter src={ ImageCategory } filterName="Category" />
            <Filter src={ ImageIngredient } filterName="Ingredient" />
            <Filter src={ ImageAlcoholic } filterName="Alcohol content" />
            <Filter src={ ImageGlass } filterName="Glass" />
        </div>
    )
}

export default Filters;

import React from 'react'
import './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients).map(ig => [...Array(props.ingredients[ig])].map((_, i) => <BurgerIngredient key={ig + i} type={ig} />)).reduce((arr, el) => arr.concat(el), []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredient</p>
    }
    console.log(transformedIngredients)
    return (
        <div className="Burger">
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default burger

import React from 'react'
import './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {
    const transformedIngredients = Object.keys(props.ingredients).map(ig => [...Array(props.ingredients[ig])].map((_, i) => <BurgerIngredient key={ig + i} type={ig} />))
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

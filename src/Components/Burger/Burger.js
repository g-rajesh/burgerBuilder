import React from 'react';
import styles from './Burger.module.css';

import BurgerIngredient from './BurgerIngrediant/BurgerIngredient';

const burger = (props) => {

  let transformedIngredients = Object.keys(props.ingredients)
  .map(igKey => {
    return [...Array(props.ingredients[igKey])].map((_,k)=>{
      return <BurgerIngredient key={igKey+k} type={igKey} />
    });
  })
  .reduce((prev,curr) => {
    return prev.concat(curr)
  },[]);

  if(transformedIngredients.length === 0){
    transformedIngredients = <p>Please start adding ingredients</p>;
  }

  return (
    <div className={styles.Burger}>
      <BurgerIngredient type="bread-top"/>
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom"/>
    </div>
  );
}

export default burger;
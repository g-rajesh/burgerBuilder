import React, {Component} from 'react';

import Aux from '../../HOC/Auxilliary';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICE = {
  bacon : 0.7,
  salad : 0.5,
  meat : 1.3,
  cheese : 0.4
}

class BurgerBuilder extends Component{

  state = {
    ingredients : {
      bacon : 0,
      salad : 0,
      meat : 0,
      cheese : 0
    },
    totalPrice : 4,
    purchasable : false,
    ordered : false
  }

  purchaseHandler = () => {
    this.setState({ordered : true});
  }

  purchaseCancelHandler = () => {
    this.setState({ordered : false});
  }

  purchaseContinueHandler = () => {
    alert('Burger will be delievered sooon!');
  }
  
  updatePurchasable = (ingredient) => {
    const sum = 
    Object.keys(ingredient)
      .map(key => {
        return ingredient[key];
      }).reduce((sum,cur)=>{
        return sum+cur;
      },0);

    this.setState({purchasable:sum>0});
  }

  addIngredientHandler = (type) => {
    const newCount = this.state.ingredients[type] + 1;
    const useIngredients = {...this.state.ingredients};
    useIngredients[type] = newCount;
    const newPrice = this.state.totalPrice + INGREDIENT_PRICE[type];

    this.setState({ingredients:useIngredients,totalPrice:newPrice});
    this.updatePurchasable(useIngredients);
  }

  removeIngredientHandler = (type) => {
    if(this.state.ingredients[type] <= 0){
      return;
    }
    const newCount = this.state.ingredients[type] - 1;
    const useIngredients = {...this.state.ingredients};
    useIngredients[type] = newCount;
    const newPrice = this.state.totalPrice - INGREDIENT_PRICE[type];

    this.setState({ingredients:useIngredients,totalPrice:newPrice});
    this.updatePurchasable(useIngredients);
  }

  render(){

    let disabledInfo = {...this.state.ingredients};
    for(let i in disabledInfo){
      disabledInfo[i] = disabledInfo[i] <= 0;
    }

    return(
      <Aux>
        <Modal show={this.state.ordered} clicked={this.purchaseCancelHandler}>
          <OrderSummary 
          ingredients={this.state.ingredients} 
          cancelled={this.purchaseCancelHandler} 
          continued={this.purchaseContinueHandler} 
          price={this.state.totalPrice} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls 
          ingredientAdded={this.addIngredientHandler} 
          ingredientRemoved={this.removeIngredientHandler} 
          ordered = {this.purchaseHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice} 
          purchasable={this.state.purchasable}
          />
      </Aux>
    );
  }
}

export default BurgerBuilder;
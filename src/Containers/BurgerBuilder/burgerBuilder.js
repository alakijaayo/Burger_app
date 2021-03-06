import React, { Component } from 'react';
import Aux from '../../HOC/aux';
import Burger from '../../Components/Burger/burger';
import BuildControls from '../../Components/Burger/BuildControls/buildControls';
import Modal from '../../Components/UI/Modal/modal';
import OrderSummary from '../../Components/Burger/OrderSummary/orderSummary';
import axios from '../../axios-orders';
import Spinner from '../../Components/UI/Spinner/spinner';

const INGREDIENT_PRICES = {
  salad: 1,
  cheese: 1,
  meat: 2,
  bacon: 2
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 5,
    purchasable: false,
    purchasing: false,
    loading: false
  }

  updatePurchaseState (ingredients) {
    const sum = Object.keys(ingredients)
    .map(igKey => {
      return ingredients[igKey]
    })
    .reduce((sum, el) => {
      return sum + el;
    }, 0);
    this.setState({purchasable: sum > 0})
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice
    const newPrice = oldPrice + priceAddition;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
    this.updatePurchaseState(updatedIngredients)
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice
    const newPrice = oldPrice - priceDeduction;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
    this.updatePurchaseState(updatedIngredients);

  }

  purchaseHandler = () => {
    this.setState({purchasing: true})
  }

  purchaseCancelHandler = () => {
    this.setState({purchasing: false})
  }

  purchaseContinueHandler = () => {
    // alert('You Continue')
    this.setState({loading: true})
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: 'Ayodele Alakija',
        address: {
          street: '50 Test Street Lane',
          Postcode: 'TE1 ST2',
          country: 'United Kingdom'
        },
        email: 'test@test.com'
      },
      deliveryMethod: 'fastest'
    }
    axios.post('/orders.json', order)
    .then(response => this.setState({loading: false, purchasing: false}))
    .catch(error => this.setState({loading: false, purchasing: false}));
  }

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    let orderSummary = <OrderSummary
      ingredients={this.state.ingredients}
      price={this.state.totalPrice}
      purchaseCancelled={this.purchaseCancelHandler}
      purchaseContinued={this.purchaseContinueHandler} />
    if (this.state.loading) {
      orderSummary = <Spinner />
    }
    return (
      <Aux>
      <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
        {orderSummary}
      </Modal>
        <Burger
          ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          purchasable={this.state.purchasable}
          price={this.state.totalPrice}
          ordered={this.purchaseHandler} />
      </Aux>
    );
  }
}

export default BurgerBuilder;

import React, { Component } from 'react';
import Aux from '../../HOC/aux';
import Burger from '../../Components/Burger/burger';
import BuildControls from '../../Components/Burger/BuildControls/buildControls';

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    }
  }

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls />
      </Aux>
    );
  }
}

export default BurgerBuilder;

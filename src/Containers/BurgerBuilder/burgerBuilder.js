import React, { Component } from 'react';
import Aux from '../../HOC/aux';
import Burger from '../../Components/Burger/burger';

class BurgerBuilder extends Component {
  render() {
    return (
      <Aux>
        <Burger />
        <div>Build Controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;

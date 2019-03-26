import React from 'react';
import classes from './layout.css'
import Aux from '../../HOC/aux';
import Toolbar from '../Navigation/Toolbar/toolbar';
import SideDrawer from '../Navigation/SideDrawer/sideDrawer';

const layout = ( props ) => (
  <Aux>
    <Toolbar />
    <SideDrawer />
    <main className={classes.Content}>
      {props.children}
    </main>
  </Aux>
);

export default layout;

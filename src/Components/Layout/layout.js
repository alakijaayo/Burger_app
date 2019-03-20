import React from 'react';
import classes from './layout.css'
import Aux from '../../HOC/aux';

const layout = ( props ) => (
  <Aux>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={classes.Content}>
      {props.children}
    </main>
  </Aux>
);

export default layout;

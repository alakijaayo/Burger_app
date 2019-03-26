import React from 'react'
import Logo from '../../Logo/logo';
import NavigationItems from '../NavigationItems/navigationItems';
import classes from './sideDrawer.css'

const sideDrawer = (props) => {
  return(
    <div className={classes.SideDrawer}>
      <Logo />
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
}

export default sideDrawer;

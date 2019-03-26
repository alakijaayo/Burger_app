import React from 'react';
import classes from './toolbar.css';
import Logo from '../../Logo/logo';
import NavigationItems from '../NavigationItems/navigationItems';

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <div>MENU</div>
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;

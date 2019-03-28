import React from 'react';
import classes from './toolbar.css';
import Logo from '../../Logo/logo';
import NavigationItems from '../NavigationItems/navigationItems';
import DrawToggle from '../SideDrawer/DrawToggle/drawToggle';

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <DrawToggle clicked={props.drawToggleClicked}/>
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;

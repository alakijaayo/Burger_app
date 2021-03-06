import React from 'react'
import Logo from '../../Logo/logo';
import NavigationItems from '../NavigationItems/navigationItems';
import classes from './sideDrawer.css'
import Backdrop from '../../UI/Backdrop/backdrop';
import Aux from '../../../HOC/aux'

const sideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Closed];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }

  return(
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
        <div className={attachedClasses.join(' ')}>
          <div className={classes.Logo}>
            <Logo />
          </div>
          <nav>
            <NavigationItems />
          </nav>
        </div>
    </Aux>
  );

}

export default sideDrawer;

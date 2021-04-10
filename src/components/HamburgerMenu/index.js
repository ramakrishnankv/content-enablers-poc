import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, IconButton, SwipeableDrawer } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

import './HamburgerMenu.css';

const HamburgerMenu = () => {
  const [hamBurgerMenu, setHamBurgerMenu] = useState(false);

  const toggleHamMenu = () => {
    setHamBurgerMenu(!hamBurgerMenu);
  }

  return (
    <div className="hamMenuWrapper">
      <IconButton
        edge="start"
        className="hamButton"
        color="inherit"
        aria-label="open drawer"
        onClick={toggleHamMenu}
      >
        <MenuIcon />
      </IconButton>

      <SwipeableDrawer
        anchor='left'
        open={hamBurgerMenu}
      >
        <div className="hamMenu">
          <div className="row right">
            <Button className="closeButton" onClick={toggleHamMenu}>
              <DoubleArrowIcon className="arrowIcon" />
            </Button>
          </div>
          <div className="row center">
            <Button>LOGIN</Button>
          </div>
          <div className="row center">
            <Button variant="contained" color="secondary" classes={{ root: 'button primary' }}>
              SIGN UP
          </Button>
          </div>
        </div>
      </SwipeableDrawer>
    </div>
  )
};

HamburgerMenu.propTypes = {}
HamburgerMenu.defaultProps = {}

export default HamburgerMenu;

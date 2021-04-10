import React, { useState } from 'react';
import { Button, InputBase, Toolbar, Hidden } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import Logo from '../Logo';
import HamburgerMenu from '../HamburgerMenu';
import ShoppingCartButton from '../ShoppingCartButton';
import Select from '../Select';
import FlagIcon from '../Icons/FlagIcon';

import './Header.css';

const Header = () => {
  const [course, setCourse] = useState(10);

  const handleCourseChange = (e) => {
    setCourse(e.target.value);
  };

  return (
    <header className="header">
      <div className="headerInner">
        <Toolbar className="headerBar">
          {/* Show only on Mobile, Tablet */}
          <Hidden only={['lg', 'xl']}>
            <HamburgerMenu />
            
            <div className="logoWrap">
              <Logo className="logo" />
            </div>
            <div className="searchWrap">
              <div className="search">
                <div className="searchIcon">
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: 'searchInputRoot',
                    input: 'searchInput',
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>
            </div>
            <ShoppingCartButton />
          </Hidden>
          {/* Show only on Desktop */}
          <Hidden only={['xs', 'sm', 'md']}>
            <div className="logoWrap">
              <Logo className="logo" />
            </div>

            <Select className="courseSelect" value={course} name="course"
              options={
                [
                  { value: 10, option: 'Ten' },
                  { value: 20, option: 'Twenty' },
                  { value: 30, option: 'Thirty' }
                ]}
              onChange={handleCourseChange}
            />

            <div className="searchWrap">
              <div className="search">
                <div className="searchIcon">
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: 'searchInputRoot',
                    input: 'searchInput',
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>
            </div>

            <Select className="countrySelect" value={course} name="course"
              options={
                [
                  { value: 10, option: 'USD', icon: <FlagIcon /> },
                  { value: 20, option: 'EURO', icon: <FlagIcon country='UK' /> },
                  { value: 30, option: 'RS', icon: <FlagIcon /> }
                ]}
              onChange={handleCourseChange}
            />

            <ShoppingCartButton />
            <Button>LOGIN</Button>
            <Button variant="contained" color="secondary" classes={{ root: 'button primary' }}>
              SIGN UP
          </Button>
          </Hidden>
        </Toolbar>
      </div>
    </header>
  )
};

export { Header };
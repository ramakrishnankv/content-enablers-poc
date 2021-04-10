import React from 'react';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { useTheme, useMediaQuery } from '@material-ui/core';

import { Header } from './components/Header/';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import Home from './containers/home';
import Error from './containers/error';

import './App.css';

function App() {
  const theme = useTheme();
  const { breakpoints } = theme;
  let deviceClass = 'mobile';
  const mobile = useMediaQuery(breakpoints.down('sm'));
  const tablet = useMediaQuery(breakpoints.up('sm'));
  const desktop = useMediaQuery(breakpoints.up('md'));

  if(mobile) deviceClass = 'mobile'
  if(tablet) deviceClass = 'tablet'
  if(desktop) deviceClass = 'desktop'
  
  return (
    <div className={`app ${deviceClass}`}>
      <Header />
      <Main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/error" component={Error} />
          <Route path="*">
            <Redirect to='/error' />
          </Route>
        </Switch>
      </Main>
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import PropTypes from 'prop-types';

import './Main.css';

const Main = ({ children }) => (
  <main className="main">
    { children }
  </main>
);

Main.propTypes = {
  children: PropTypes.any,
}

Main.defaultProps = {
  children: null,
}

export { Main };
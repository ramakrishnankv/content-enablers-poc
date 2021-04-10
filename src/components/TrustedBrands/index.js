import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './TrustedBrands.css';

const TrustedBrands = () => {
  const brands = ['airbus', 'boing', 'cw', 'hd', 'intel', 'thales', 'ut'];
  return (
    <div className="trustedBrands">
      <h2>Trusted By Leading Brands</h2>
      <p>
        For more than two decades, we've helped some of the world's biggest – and smallest –
        companies train their professional staff and trade compliance practitioners. Let us be part of your trade
        compliance training solution.
      </p>
      <div className="brands">
        {
          brands.map((brand) => {
            return (
              <div className="brandIcon">
                <img src={`/images/brands/${brand}.png`} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
};

TrustedBrands.propTypes = {}
TrustedBrands.defaultProps = {}

export default TrustedBrands;
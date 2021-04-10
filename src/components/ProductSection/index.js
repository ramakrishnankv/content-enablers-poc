import React from 'react';
import PropTypes from 'prop-types';

import ProductCard from '../ProductCard';
import ProductListCard from '../ProductListCard';

import './ProductSection.css';

const ProductSection = ({
  title,
  className,
  Component,
  product,
  viewStyle,
}) => {
  return (
    <>
      {
        product.sections.map((section) => {
          return (
            <section className={`productSection ${className}`}>
              { title && (
                <Component className="sectionTitle">{section.name}</Component>
              )}
              <div className={`productCards ${viewStyle}`}>
                {

                  section.list.map((data) => {
                    return viewStyle === 'grid' ?
                      (<ProductCard data={data} />)
                      : (<ProductListCard data={data} />)
                  })
                }
              </div>
            </section>)
        })
      }
    </>
  )
};

ProductSection.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  Component: PropTypes.node,
  product: PropTypes.shape(),
  viewStyle: PropTypes.oneOf(['grid', 'list']),
};

ProductSection.defaultProps = {
  className: '',
  title: '',
  Component: 'div',
  product: {},
  viewStyle: 'grid',
};

export default ProductSection;
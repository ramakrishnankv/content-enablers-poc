import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

import './ContentBox.css';

const ContentBox = ({
  anchor,
  children,
  className,
  content,
  margin,
  padding,
  shadow,
  title,
  ...rest
}) => {
  const shadowClass = shadow ? 'shadow' : '';
  const marginClass = margin ? 'margin' : '';
  const paddingClass = padding ? 'padding' : '';

  return (
    <div className={`contentBox ${marginClass} ${paddingClass} ${shadowClass} ${className}`} id={anchor} {...rest}>
      { title && (<h3 className="title">{title}</h3>)}
      { content && (<div className="content">{ReactHtmlParser(content)}</div>)}
      { children}
    </div>
  )
};

ContentBox.propTypes = {
  anchor: PropTypes.string,
  children: PropTypes.any,
  className: PropTypes.string,
  content: PropTypes.string,
  margin: PropTypes.bool,
  padding: PropTypes.bool,
  shadow: PropTypes.bool,
  title: PropTypes.string,
}

ContentBox.defaultProps = {
  anchor: '',
  children: null,
  className: '',
  content: '',
  margin: true,
  padding: true,
  shadow: true,
  title: '',
}

export { ContentBox };
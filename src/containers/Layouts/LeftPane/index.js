import React from 'react';
import PropTypes from 'prop-types';

const LeftPane = ({children, className, ...rest}) => <div className={`leftPane ${className}`} {...rest}>{children}</div>

LeftPane.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    className: PropTypes.string,
};

LeftPane.defaultProps = {
    children: null,
    className: '',
};

export default LeftPane;
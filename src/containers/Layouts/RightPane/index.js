import React from 'react';
import PropTypes from 'prop-types';

const RightPane = ({children, className, ...rest}) => <div className={`rightPane ${className}`}>{children}</div>

RightPane.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    className: PropTypes.string,
};

RightPane.defaultProps = {
    children: null,
    className: '',
};

export default RightPane;
import React from 'react';
import PropTypes from 'prop-types';

import flagIcons from './flagIcons';

import './FlagIcon.css';

const FlagIcon = ({
    className,
    country,
}) => {
    const flag = country.toLowerCase();

    return (
        <span className={`flagIcon ${className}`}>
        {
            flagIcons[flag]
        }
        </span>
    )
};

FlagIcon.porpTypes = {
    className: PropTypes.string,
    country: PropTypes.string,
}

FlagIcon.defaultProps = {
    className: '',
    country: 'US',
}

export default FlagIcon;
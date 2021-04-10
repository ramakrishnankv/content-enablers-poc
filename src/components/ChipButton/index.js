import React from 'react';
import PropTypes from 'prop-types';
import { Chip } from '@material-ui/core';

import './ChipButton.css';

const ChipButton = ({
    className,
    selected,
    label,
    onChange,
}) => {
    const onClick = (event) => {
        onChange(event)
    };

    return (
        <Chip size="medium" className={`chip chipButton ${selected ? 'selected': ''} ${className}`}
            varient="outlined" label={label} onClick={onClick} />
    )
};

ChipButton.propTypes = {
    className: PropTypes.string,
    selected: PropTypes.bool,
    label: PropTypes.string,
    onChange: PropTypes.func,

};

ChipButton.defaultProps = {
    className: '',
    selected: false,
    label: '',
    onChange: () => {},
}

export default ChipButton;
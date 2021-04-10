import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

import './ToggleButton.css';

const ToggleButton = ({
    className,
    name,
    id,
    value,
    labels,
    onChange,
}) => {
    const [toggleValue, setToggleValue] = useState(value);

    const handleClick = (e) => {
        const { value } = e.currentTarget;
        setToggleValue(value === '0' ? 1 : 0); 
        onChange(e);
        

    };

    return (
        <Button variant="outlined" className={`toggleButton ${className}`} classes={{root: 'buttonRoot'}}
        type="button" name={name} id={id} value={toggleValue} onClick={handleClick}>
            {
                labels.map((button, ind) => {
                    return ind <= 1 ? (
                         <div className={`toggle toggle-${ind} ${toggleValue === ind ? 'selected' : ''}`}>{button.name}</div>
                    ) : null;
                })
            }
        </Button>
    )
}

ToggleButton.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    value: PropTypes.oneOf([0, 1]),
    labels: PropTypes.arrayOf([PropTypes.shape({
        name: PropTypes.string,
    })]).isRequired,
    onChange: PropTypes.func,
}

ToggleButton.defaultProps = {
    className: '',
    name: 'toggleButton',
    id: 'toggleButton',
    value: 0,
    labels: [],
    onChange: () => {},
}

export default ToggleButton;
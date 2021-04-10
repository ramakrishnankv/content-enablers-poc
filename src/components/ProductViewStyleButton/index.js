import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

import { GridIcon } from '../Icons';
import { ListIcon } from '../Icons';

import './ProductViewStyleButton.css';

const ProductViewStyleButton = ({
    onChange,
    type,
    selected,
}) => {
    const handleOnClick = (event) => {
        event.preventDefault();
        onChange(event, type);
    };

    return (
        <Button variant="outlined" classes={{root: `iconButton ${type}Icon`}} className={selected ? 'selected' : ''} onClick={handleOnClick}>
            {type === 'grid' ? <GridIcon /> : <ListIcon /> }
        </Button>
    )
}

ProductViewStyleButton.propTypes = {
    onChange: PropTypes.func,
    type: PropTypes.oneOf(['grid', 'list']),
    selected: PropTypes.bool,
};

ProductViewStyleButton.defaultProps = {
    onChange: () => { },
    type: 'grid',
    selected: false,
};

export default ProductViewStyleButton;
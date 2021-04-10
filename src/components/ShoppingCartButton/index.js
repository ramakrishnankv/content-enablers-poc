import React from 'react';
import { Button, Badge } from '@material-ui/core';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

import './ShoppingCartButton.css';

const ShoppingCartButton = () => {
    return (
        <Button variant="outlined" classes={{root: 'iconButton cartIcon'}}>
            <Badge badgeContent={33} color="primary">
                <ShoppingCartOutlinedIcon />
            </Badge>
        </Button>
    )
}

export default ShoppingCartButton;
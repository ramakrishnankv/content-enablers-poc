import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

const TwoColumnLayout = ({children}) => {
    return (
        <Grid container spacing={0}>
            {children}
        </Grid>
    )
}

TwoColumnLayout.propTypes = {
    children: PropTypes.element,
};

TwoColumnLayout.defaultProps = {
    children: null,
}

export default TwoColumnLayout;
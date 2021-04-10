import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Tabs, Tab }  from '@material-ui/core';

import './MenuScrollable.css';

const menus = [1, 2, 3]; // TODO: get dynamic content

const MenuScrollable = ({
    className,
    tabList,
    onChange,
    selectedTab,
}) => {
    const [value, setValue] = useState(selectedTab);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        onChange(event, newValue)
    };

    return (
        <div className={`menuScroll ${className}`}>
            <AppBar position="static" className="menuScrollBar" color="default">
                <Tabs
                    className="tabs"
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="secondary"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs"
                >
                    {
                        tabList.map((item) => <Tab className="tab" label={item} value={item} />)
                    }
                </Tabs>
            </AppBar>
      </div>
    )
};

MenuScrollable.propTypes = {
    className: PropTypes.string,
    selectedTab: PropTypes.string,
    tabList: PropTypes.arrayOf([PropTypes.string]),
    onChange: PropTypes.func,
};

MenuScrollable.defaultProps = {
    className: '',
    selectedTab: '',
    tabList: [],
    onChange: () => {}
}

export default MenuScrollable;
import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, InputBase, InputLabel, MenuList, MenuItem, Select as SelectBox, FormControl } from '@material-ui/core';

import './Select.css';

const Select = ({
    className,
    labelId,
    id,
    value,
    onChange,
    options,
    name,
}) => {
    return (
        <FormControl className={`selectBoxWrap selectInner ${className}`}>
            <SelectBox
              labelId={labelId}
              id={id}
              value={value}
              name={name}
              classes={{
                root: 'selectBox',
                
              }}
              className="selectRoot"
              onChange={onChange}
            >
                <MenuItem className="menuItem" classes={{root: 'menuList'}} value='0'><em>None</em></MenuItem>
                {
                    options.map((item) => (
                        <MenuItem className="menuListItem menuItem" value={item.value}>
                            {item.icon && (<span className="optionIcon">{item.icon}</span>)}
                            {item.option}
                        </MenuItem>
                    ))
                }
            </SelectBox>
          </FormControl>
    )
}

Select.propTypes = {
    name: PropTypes.string,
    className: PropTypes.string,
    labelId: PropTypes.string,
    id: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    options: PropTypes.arrayOf(
        {
            value: PropTypes.string, 
            option: PropTypes.string, 
            icon: PropTypes.oneOfType(
                [
                    PropTypes.element,
                    PropTypes.elementType,
                    PropTypes.node,
                ])
        }
    ),
}

Select.defaultProps = {
    name: '',
    className: '',
    labelId: '',
    id: '',
    value: '',
    onChange: () => {},
    options: [{value: '', option: '', icon: null}]
}

export default Select;
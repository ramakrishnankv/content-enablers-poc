import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails }  from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { ContentBox } from '../../components/ContentBox';
import ChipButton from '../../components/ChipButton';

import './MenuCourses.css';

const menus = [1, 2, 3]; // TODO: get dynamic content
const chips = ['US', 'UK', 'Global', 'Switzerland', 'Honkong', 'Uruguay']; // TODO: get dynamic content

const Menu = ({
    onChange,
    index,
    selected,
    isExpanded,
}) => {
    const [selectedChipLabel, setSelectedChipLabel] = useState('US');
    const onChangeAccordion = (e, isExpanded) => {
        onChange(e, index, isExpanded);
    };

    const onChangeFilter = (event) => {
        const {innerText: chipText} = event.target;
        setSelectedChipLabel(chipText);
    };
    return (
        <Accordion defaultExpanded={false} expanded={isExpanded}
        className={`accordion ${isExpanded ? 'expanded' : ''} ${selected === index ? 'selected' : ''}`} onChange={onChangeAccordion}>
            <AccordionSummary expandIcon={<ExpandMoreIcon className="expandIcon" />} className="accrodionSummary">
                Training for Compliance Practitioners
            </AccordionSummary>
            <AccordionDetails className="accordionDetails">
                <div className="selectText">Select Your Desired Jurisdiction</div>
                <div classname="filters">
                    {
                        chips.map((label) => <ChipButton label={label} selected={label === selectedChipLabel} onChange={onChangeFilter} />)
                        
                    }
                </div>
            </AccordionDetails>
        </Accordion>
    )
}

const MenuCourses = () => {
    const [selected, setSelected] = useState(1);
    const [exp, setExp] = useState();

    const onChange = (e, index, isExpanded) => {
        const { target } = e;
        setSelected(index);
        if (isExpanded) setExp(index)
        else setExp(null)
    }

    return (
        <ContentBox className="menuCourses">
            {
                menus.map((el, ind) => <Menu index={ind} selected={selected} isExpanded={exp === ind} onChange={onChange} />)
            }
        </ContentBox>
    )
}

export default MenuCourses;
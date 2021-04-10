import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

import { FlagIcon } from '../Icons';

import './ProductCard.css';

const ProductCard = ({
    className,
    data,
}) => {
    const { course, image, price, type } = data;
    const onSubscribe = () => {
        console.log('subscribe button clicked');
    };

    const onLearn = () => {
        console.log('learn more button clicked');
    };

    return (
        <div className={`productCard ${className}`}>
            <div className={`cardInner`}>
                <div className="cardSection">
                    <div className="cardImageSection">
                        <img className="cardImage" src={`${image}`} alt="" />
                        <div className="cardTitleSection">
                            <h3 className="cardTitle">{type}</h3>
                            <div className="titleIcon">
                                <FlagIcon country="uk" />
                            </div>
                        </div>
                    </div>
                    <div className="contentSection">
                        <div className="content">
                            {course}
                        </div>
                        <div className="cardPrice">
                            <sup className="currency">$</sup>
                            <span className="price">{price}/</span>
                            <span className="term">Annually</span>
                        </div>
                    </div>
                </div>
                <div className="buttonSection">
                    <Button className="subscribe" onClick={onSubscribe}>SUBSCRIBE</Button>
                    <Button className="learn" variant="outlined" onClick={onLearn}>LEARN MORE</Button>
                </div>
            </div>
        </div>
    )
};

ProductCard.propTypes = {
    className: PropTypes.string,
    data: PropTypes.shape({
        course: PropTypes.string,
        image: PropTypes.string,
        price: PropTypes.string,
        type: PropTypes.string,
    }).isRequired,
};

ProductCard.defaultProps = {
    className: '',
    data: {
        course: '',
        image: '',
        price: '',
        type: '',
    }
};

export default ProductCard;
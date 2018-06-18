import React from 'react';
import PropTypes from 'prop-types';

Price.propTypes = {
    price: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    currencySign: PropTypes.string
}

function Price({ price, currency, currencySign }) {
    const classNames = {
        price: 'price',
        priceTitle: 'price__title',
        priceContent: 'price__content',
        priceSign: 'price__content--sign',
        priceAmount: 'price__content--amount',
        priceCurrency: 'price__content--currency'
    };
    
    return (
        <div className={classNames.price} >
            <p className={classNames.priceTitle}> Starting from </p>
            <div className={classNames.priceContent}>
                <div className={classNames.priceSign}>{currencySign}</div>
                <div className={classNames.priceAmount}>{price}</div>
                <div className={classNames.priceCurrency}>{currency}</div>
            </div>
        </div>
    )
}

export default Price;
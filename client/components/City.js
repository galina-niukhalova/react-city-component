import React from 'react';

import Stars from './Stars';
import Price from './Price';
import Button from './buttons/Btn';
import Weather from './Weather';
import Time from './Time';
import PropTypes from 'prop-types';
import ReactCSSTransitionReplace from 'react-css-transition-replace';

const staticData = {
    country: 'Thailand',
    rating: 5,
    price: 14,
    currency: { sign: '$', name: 'USD' },
    temperature: { degree: 32, scale: 'C', description: 'Sunny with clouds' }
};

const classNames = {
    city: 'city',
    imgBox: 'city__img',
    imgOverlay: 'city__img-overlay',
    cityContent: 'city__content',
    cityName: 'city__name',
    cityCountry: 'city__country',
    cityDescription: 'city__description',
    cityLinks: 'city__links'
};

const animationProps = {
    transitionName: "carousel",
    transitionEnterTimeout: 1000,
    transitionLeaveTimeout: 1000
};

City.propTypes = {
    index: PropTypes.number,
    city: PropTypes.object
}

function City({ index, city }) {
    const handleGoToTours = () => { }
    const handleGoToAttractions = () => { }
    const handleGoToTransport = () => { }

    const renderImg = () => {
        return (
            <div className={classNames.imgBox}>
                <div className={classNames.imgBox}>
                    <ReactCSSTransitionReplace {...animationProps}>
                        <img src={city.main_image} key={index} />
                    </ReactCSSTransitionReplace>
                </div>
                <div className={classNames.imgOverlay}>
                    <Weather
                        degree={staticData.temperature.degree}
                        scale={staticData.temperature.scale}
                        iconName={'clouds'}
                        description={staticData.temperature.description}
                    />
                    <Time />
                </div>
            </div>

        )
    }

    const renderContent = () => {
        return (
            <div className={classNames.cityContent}>
                <h4 className={classNames.cityName}>{city.name}</h4>
                <p className={classNames.cityCountry}>{staticData.country}</p>
                <Stars maxRating={5} rating={staticData.rating} />
                <p className={classNames.cityDescription}>{city.description}</p>
                <Price price={staticData.price} currency={staticData.currency.name} currencySign={staticData.currency.sign} />
                <div className={classNames.cityLinks} >
                    <Button active={true} onClick={handleGoToTours}> Tours </Button>
                    <Button onClick={handleGoToAttractions}> Attractions </Button>
                    <Button onClick={handleGoToTransport}> Transport </Button>
                </div>
            </div>
        )
    };

    return (
        <div className={classNames.city} >
            {renderImg()}
            {renderContent()}
        </div>
    )
}

export default City;



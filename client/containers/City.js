import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import animateSlider from '../helpers/animations';
import GET_CITY from '../queries/fetchCity';

import Stars from '../components/Stars';
import Price from '../components/Price';
import Button from '../components/buttons/Btn';
import Weather from '../components/Weather';
import Time from '../components/Time';

const info = {
    country: 'Thailand',
    rating: 5,
    price: 14,
    currency: { sign: '$', name: 'USD' },
    temperature: { degree: 32, scale: 'C', description: 'Sunny with clouds' }
}


const City = ({ props, additionalClass }) => {
    const { city } = props;

    const classNames = {
        city: 'city',
        imgBox: 'city__img',
        img: additionalClass.blur,
        imgOverlay: 'city__img-overlay',
        cityContent: 'city__content',
        cityName: 'city__name',
        cityCountry: 'city__country',
        cityDescription: 'city__description',
        cityLinks: 'city__links'
    }

    const renderImg = () => (
        <div className={classNames.imgBox}>
            <img src={city.main_image} className={classNames.img} />
            <div className={classNames.imgOverlay}>
                <Weather
                    degree={info.temperature.degree}
                    scale={info.temperature.scale}
                    iconName={'clouds'}
                    description={info.temperature.description}
                />
                <Time/>
            </div>
        </div>
    );

    const handleGoToTours = () => { }
    const handleGoToAttractions = () => { }
    const handleGoToTransport = () => { }

    const renderContent = () => (
        <div className={classNames.cityContent}>
            <h4 className={classNames.cityName}>
                {city.name}
            </h4>
            <p className={classNames.cityCountry}>
                {info.country}
            </p>
            <Stars maxRating={5} rating={info.rating} />
            <p className={classNames.cityDescription}>
                {city.description}
            </p>
            <Price price={info.price} currency={info.currency.name} currencySign={info.currency.sign} />
            <div className={classNames.cityLinks} >
                <Button active={true} onClick={handleGoToTours}> Tours </Button>
                <Button onClick={handleGoToAttractions}> Attractions </Button>
                <Button onClick={handleGoToTransport}> Transport </Button>
            </div>
        </div>
    );

    return (
        <div className={classNames.city}>
            {renderImg()}
            {renderContent()}
        </div>
    )
}

const AnimatedCity = animateSlider(City);

class Query extends Component {
    shouldComponentUpdate(nextProps) {
        return !nextProps.data.loading;
    }

    render() {
        const { data } = this.props;
        if (data.loading) return null;

        return (<AnimatedCity city={data.city} />)
    }
}


export default graphql(GET_CITY, {
    options: ({ index }) => { return { variables: { index } } }
})(Query);



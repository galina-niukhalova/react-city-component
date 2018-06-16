import React, { Component } from 'react';

import Stars from '../components/Stars';
import Price from '../components/Price';
import Button from '../components/buttons/Btn';
import Weather from '../components/Weather';
import Time from '../components/Time';
import BlurTransition from '../animations/BlurTransition'

const info = {
    country: 'Thailand',
    rating: 5,
    price: 14,
    currency: { sign: '$', name: 'USD' },
    temperature: { degree: 32, scale: 'C', description: 'Sunny with clouds' }
}

const classNames = {
    city: 'city',
    imgBox: 'city__img',
    imgOverlay: 'city__img-overlay',
    cityContent: 'city__content',
    cityName: 'city__name',
    cityCountry: 'city__country',
    cityDescription: 'city__description',
    cityLinks: 'city__links'
}

class City extends Component {
    state = {
        animate: true
    }

    componentWillReceiveProps(newProps) {
        if (this.props.index !== newProps.index)
            this.setState(() => ({ animate: !this.state.animate }))
    }

    renderImg = () => {
        const { city } = this.props;
        return (
            <div className={classNames.imgBox}>
                <BlurTransition duration={700} in={this.state.animate}>
                    <img src={city.main_image} className={classNames.img} />
                </BlurTransition >
                <div className={classNames.imgOverlay}>
                    <Weather
                        degree={info.temperature.degree}
                        scale={info.temperature.scale}
                        iconName={'clouds'}
                        description={info.temperature.description}
                    />
                    <Time />
                </div>
            </div>
        )
    }

    renderContent = () => {
        const { city } = this.props;

        return (<div className={classNames.cityContent}>
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
                <Button active={true} onClick={this.handleGoToTours}> Tours </Button>
                <Button onClick={this.handleGoToAttractions}> Attractions </Button>
                <Button onClick={this.handleGoToTransport}> Transport </Button>
            </div>
        </div>
        )
    };

    handleGoToTours = () => { }
    handleGoToAttractions = () => { }
    handleGoToTransport = () => { }

    render() {
        return (
            <div className={classNames.city} >
                {this.renderImg()}
                {this.renderContent()}
            </div>
        )
    }

}

export default City;




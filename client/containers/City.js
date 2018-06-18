import React, { Component } from 'react';

import Stars from '../components/Stars';
import Price from '../components/Price';
import Button from '../components/buttons/Btn';
import Weather from '../components/Weather';
import Time from '../components/Time';
import PropTypes from 'prop-types';
import ReactCSSTransitionReplace from 'react-css-transition-replace';

const info = {
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

const transitionProps = {
    transitionName: "carousel",
    transitionEnterTimeout: 1000,
    transitionLeaveTimeout: 1000
};


export default class extends Component {
    state = {
        animate: true
    }

    static propTypes = {
        index: PropTypes.number,
        city: PropTypes.object
    }

    componentWillReceiveProps({ index }) {
        if (this.props.index !== index)
            this.setState(() => ({ animate: !this.state.animate }))
    }

    renderImg = () => {
        const { city, index } = this.props;
        return (
            <div className={classNames.imgBox}>
                <div className={classNames.imgBox}>
                    <ReactCSSTransitionReplace {...transitionProps}>
                        <img src={city.main_image} key={index} />
                    </ReactCSSTransitionReplace>
                </div>
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

        return (
            <div className={classNames.cityContent}>
                <h4 className={classNames.cityName}>{city.name}</h4>
                <p className={classNames.cityCountry}>{info.country}</p>
                <Stars maxRating={5} rating={info.rating} />
                <p className={classNames.cityDescription}>{city.description}</p>
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



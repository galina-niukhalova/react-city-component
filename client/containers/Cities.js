import React from 'react';
import { graphql } from 'react-apollo';
import PropTypes from 'prop-types';

import City from './City';
import Slider from './Slider';

import GET_CITIES_TOTAL from '../queries/fetchTotalCities';

Cities.propTypes = {
    data: PropTypes.object.isRequired
};

function Cities({ data }) {
    const { totalCities } = data;

    const classNames = {
        cities: 'cities',
        citiesTitle: 'cities__title',
        citiesTitleText: 'cities__title--text',
        citiesLink: 'cities__link'
    }

    if(data.error) return <div>{data.error}</div>

    return (
        <div className={classNames.cities}>
            <div className={classNames.citiesTitle}>
                <div className={classNames.citiesTitleText}>
                    <span>Where to go? </span>
                    <span>This weeks standout destinations are...</span>
                </div>
                <a href="#" className={classNames.citiesLink}>See all ></a>
            </div>
            <Slider totalSlides={totalCities}>
                <City />
            </Slider>
        </div>
    );
}

export default graphql(GET_CITIES_TOTAL)(Cities);
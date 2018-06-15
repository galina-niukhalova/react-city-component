import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import City from './City';
import Slider from './Slider';

import GET_CITIES_TOTAL from '../queries/fetchTotalCities';

class Cities extends Component {
    render() {
        const { totalCities } = this.props.data;

        return (
            <div>
                <div className='cities__title'>
                    <div className='cities__title--text'>
                        <span>Where to go? </span>
                        <span>This weeks standout destinations are...</span>
                    </div>
                    <a href="#" className='cities__link'>See all ></a>
                </div>
                <Slider totalSlides={totalCities}>
                    <City />
                </Slider>
            </div>
        );
    }
}

export default graphql(GET_CITIES_TOTAL)(Cities);
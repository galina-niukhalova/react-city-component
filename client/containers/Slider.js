import React, { Component } from 'react';

import BtnNext from '../components/buttons/BtnNext';
import CityQuery from './CityQuery';
import PropTypes from 'prop-types';

class Slider extends Component {
    state = {
        currentSlide: 0
    }

    static propTypes = {
        totalSlides: PropTypes.number
    }

    handleClick = () => {
        this.setState(() => {
            let nextSlide = this.state.currentSlide + 1;
            return {
                currentSlide: nextSlide < this.props.totalSlides ? nextSlide : 0
            }
        });
    }

    render() {
        const classNames = {
            slider: 'slider', 
            slide: 'slide', 
            slideNext: 'slider__arrow'
        };

        return (
            <div className={classNames.slider}>
                <div className={classNames.slide}>
                    <CityQuery index={this.state.currentSlide} />
                </div>
                <BtnNext onClick={this.handleClick} additionClass={classNames.slideNext} />
            </div>
        )
    }
}

export default Slider;
import React, { Component } from 'react';

import BtnNext from '../components/buttons/BtnNext';
import Slide from '../components/Slide';
import CityQuery from './CityQuery';

class Slider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentSlide: 0
        }
    }

    renderSlideContent = () => {
        if (this.state)
            return React.cloneElement(this.props.children, { index: this.state.currentSlide });
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
        return (
            <div className="slider">
                <Slide>
                    <CityQuery index={this.state.currentSlide}/>
                </Slide>
                <BtnNext onClick={this.handleClick} className="slider__arrow" />
            </div>
        )
    }
}

export default Slider;
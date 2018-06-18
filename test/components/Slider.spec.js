import React from 'react'
import Slider from '../../client/containers/Slider';
import CityQuery from '../../client/containers/CityQuery';
import BtnNext from '../../client/components/buttons/BtnNext';

import { shallow } from 'enzyme';

function setup({ totalSlides }) {
    const component = shallow(
        <Slider totalSlides={totalSlides} />
    );

    return {
        slide: component.find(CityQuery),
        btnNextSlide: component.find(BtnNext), 
        slider: component
    }
}

describe('Slider component', () => {
    let props;

    beforeEach(() => {
        props = {
            totalSlides: 5
        }
    });

    it('should render a slide', () => {
        const { slide } = setup(props);

        expect(slide.props().index).toEqual(0);
    });

    it('should show a next slide when user clicked btn next', () => {
        const { btnNextSlide, slider } = setup(props);

        expect(slider.state().currentSlide).toEqual(0);

        btnNextSlide.simulate('click');
        expect(slider.state().currentSlide).toEqual(1);
    });

    it('should show the first slide after the last slide', () => {
        const { btnNextSlide, slider } = setup({totalSlides: 2});
       
        btnNextSlide.simulate('click');
        btnNextSlide.simulate('click');
        expect(slider.state().currentSlide).toEqual(0);
    });
});
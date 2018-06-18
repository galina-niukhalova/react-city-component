import React from 'react'
import Stars from '../../client/components/Stars';

import { shallow } from 'enzyme';

function setup({ maxRating, rating }) {
    const component = shallow(
        <Stars rating={rating} maxRating={maxRating} />
    );

    return {
        stars: component.find('svg'),
        filedStars: component.find('path.star--filed'),
        outlineStars: component.find('path.star--outline')
    }
}

describe('Stars component', () => {
    let props;

    beforeEach(() => {
        props = {
            maxRating: 5,
            rating: 3
        }
    });

    it('should render a correct amount of stars', () => {
        const { stars } = setup(props);

        expect(stars.length).toEqual(5);
    });

    it('should render a correct amount of filed stars', () => {
        const { filedStars } = setup(props);

        expect(filedStars.length).toEqual(3);
    });

    it('should render a correct amount of outline stars', () => {
        const { outlineStars } = setup(props);

        expect(outlineStars.length).toEqual(2);
    });

})
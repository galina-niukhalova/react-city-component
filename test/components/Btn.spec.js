import React from 'react'
import Btn from '../../client/components/buttons/Btn';

import { shallow } from 'enzyme';

function setup({ active }) {
    const actions = {
        onClick: jest.fn()
    }

    const component = shallow(
        <Btn active={active} {...actions} />
    );

    return {
        actions,
        btn: component.find('button')
    }
}

describe('Btn component', () => {
    let props;

    beforeEach(() => {
        props = {
            active: false
        }
    });

    it('should call an action on btn click', () => {
        const { btn, actions } = setup(props);

        btn.simulate('click');

        expect(actions.onClick).toBeCalled();
    });

    it('should render active btn', () => {
        const { btn } = setup({ active: true });

        expect(btn.hasClass('btn--active')).toBeTruthy();
    })

    it('should render non active btn', () => {
        const { btn } = setup(props);

        expect(btn.hasClass('btn--active')).toBeFalsy();
    })
});
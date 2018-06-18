import React from 'react'
import BtnNext from '../../client/components/buttons/BtnNext';

import { shallow } from 'enzyme';

function setup() {
    const actions = {
        onClick: jest.fn()
    }

    const component = shallow(
        <BtnNext {...actions} />
    );

    return {
        actions, 
        btn: component.find('button')
    }
}

describe('Btn next component', () => {
    it('should call an action on btn click', () => {
        const { btn, actions } = setup();

        btn.simulate('click');

        expect(actions.onClick).toBeCalled();
    })
});
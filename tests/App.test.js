import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import Link from '../Link.react';

test('initial game score', () => {
    const wrapper = shallow(<App/>)
    expect(wrapper.find('#score-text span').text()).toBe("0")
})
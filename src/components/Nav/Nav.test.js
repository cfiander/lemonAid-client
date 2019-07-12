import React from 'react';
import { shallow } from 'enzyme';
import Nav from './Nav';
import toJson from 'enzyme-to-json'

describe('Nav component', () => {
  it('renders a Nav', () => {
    const wrapper = shallow(<Nav />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  
});
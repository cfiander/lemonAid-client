
import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import LoginPage from './LoginPage';

describe(`IngredientsPage component`, () => {
  it('renders an IngredientsPage by default', () => {
    const wrapper = shallow(<LoginPage
         />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
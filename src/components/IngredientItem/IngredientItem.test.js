import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import IngredientItem from './IngredientItem'


describe(`IngredientItem component`, () => {
  const props = {
    id: 'a',
    name: 'test-class-name',
  }

  it('renders an ingredient by default', () => {
    const wrapper = shallow(<IngredientItem />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders an ingredient given props', () => {
    const wrapper = shallow(<IngredientItem {...props}/>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
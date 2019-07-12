import React from 'react'
import { shallow } from 'enzyme'
import Search from './Search';
import toJson from 'enzyme-to-json'

describe('Search Form',() =>{
    it('renders a search by default', () => {
        const wrapper = shallow(<Search />)
        expect(toJson(wrapper)).toMatchSnapshot()
      })
})
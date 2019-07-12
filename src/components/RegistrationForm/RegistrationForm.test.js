import React from 'react'
import { shallow } from 'enzyme'
import RegistrationForm from './RegistrationForm';
import toJson from 'enzyme-to-json'



describe('renders the form',() =>{
    it('renders a registrationform by default', () => {
        const wrapper = shallow(<RegistrationForm />)
        expect(toJson(wrapper)).toMatchSnapshot()
      })
})
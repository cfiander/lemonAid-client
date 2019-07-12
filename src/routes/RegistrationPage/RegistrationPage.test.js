import React from 'react'
import { shallow } from 'enzyme'
import RegistrationPage from './RegistrationPage';
import toJson from 'enzyme-to-json'



describe('Renders the registration page',() =>{
    it('renders a registrationform by default', () => {
        const wrapper = shallow(<RegistrationPage />)
        expect(toJson(wrapper)).toMatchSnapshot()
      })
})
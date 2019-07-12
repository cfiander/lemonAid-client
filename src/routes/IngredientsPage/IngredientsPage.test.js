
import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import IngredientsPage from './IngredientsPage';

describe(`IngredientsPage component`, () => {
  const props = {
    notes: [
      {
        "id": "cbc787a0-ffaf-11e8-8eb2-f2801f1b9fd1",
        "name": "Apple",
      },
      {
        "stateId": "d26e0034-ffaf-11e8-8eb2-f2801f1b9fd1",
        "name": "Sugar",
      },
      {
        "stateId": "d26e01a6-ffaf-11e8-8eb2-f2801f1b9fd1",
        "name": "Caramel",
      },
      {
        "stateId": "d26e0570-ffaf-11e8-8eb2-f2801f1b9fd1",
        "name": "Flour",
      },
    ]
  }

  it('renders an IngredientsPage by default', () => {
    const wrapper = shallow(<IngredientsPage />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders a Ingredient in ul for each Ingredient in array', () => {
    const ul = shallow(<IngredientsPage {...props} />)
      .find('ul')
    expect(toJson(ul)).toMatchSnapshot()
  })
})
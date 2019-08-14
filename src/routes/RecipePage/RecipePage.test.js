
import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import RecipePage from './RecipePage';

describe(`IngredientsPage component`, () => {
  const props = {
    recipeList: [
      {
        "id":645152,
        "title":"Grandma's Apple Crisp",
        "image":"https://spoonacular.com/recipeImages/Grandmas-Apple-Crisp-645152.jpg",
        "usedIngredientCount":3,
        "missedIngredientCount":6,
        "likes":1
      },
      {
        "id":645152,
        "title":"Grandma's Apple Crisp",
        "image":"https://spoonacular.com/recipeImages/Grandmas-Apple-Crisp-645152.jpg",
        "usedIngredientCount":3,
        "missedIngredientCount":6,
        "likes":1
      },
      {
    "id":645152,
    "title":"Grandma's Apple Crisp",
    "image":"https://spoonacular.com/recipeImages/Grandmas-Apple-Crisp-645152.jpg",
    "usedIngredientCount":3,
    "missedIngredientCount":6,
    "likes":1
      },
    ]
  }

  it('renders an RecipePage by default', () => {
    const wrapper = shallow(<RecipePage/>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders a recipe in ul for each recipe in the array', () => {
    const ul = shallow(<RecipePage {...props} />)
      .find('recipeList')
    expect(toJson(ul)).toMatchSnapshot()
  })
})
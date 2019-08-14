import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Recipes from './Recipes';


describe(`Recipes component`, () => {
  const recipe = {
        "id":645152,
        "expanded": false,
        "title":"Grandma's Apple Crisp",
        "image":"https://spoonacular.com/recipeImages/Grandmas-Apple-Crisp-645152.jpg",
        "usedIngredientCount":3,
        "missedIngredientCount":6,
        "missedIngredients": ["soy sauce", "brown sugar", "cilantro"],
        "likes":1,
        "fullRecipe": false
  }

  it('renders a recipe by default', () => {
    const wrapper = shallow(<Recipes recipe={recipe}/>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders a recipe given props', () => {
    const wrapper = shallow(<Recipes recipe={recipe}/>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
import React, { Component } from 'react'
import RecipeContext from '../../contexts/RecipeContext'
import Ingredient from '../../components/IngredientItem/IngredientItem'
import { Link } from 'react-router-dom'
import Search from '../../components/Search/Search';

export default class IngredientsPage extends Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }

  static contextType = RecipeContext


  render() {
    const { ingredientsList = [] } = this.context
    return (
      <div className="ingredients">
        <div className="searchForm">
          <Search />
        </div>
        <ul className="ingredientList">
          {ingredientsList.map((ingredient, i) =>
            <li key={ingredient.id} className="ingredient">
              <Ingredient
                key={i}
                id={ingredient.stateId}
                name={ingredient.name} />
            </li>
          )}
        </ul>
        <Link to={`/recipes`} className="basicButton">
          search recipes
        </Link>
      </div>
    )
  }
}

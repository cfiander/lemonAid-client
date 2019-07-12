import React from 'react'
import RecipeContext from '../../contexts/RecipeContext'
import './IngredientItem.css'


export default class Ingredient extends React.Component {
  static defaultProps ={
    handleClickDelete: () => {},
  }
  static contextType = RecipeContext

  handleClickDelete = e => {
    e.preventDefault()
    const ingredientId = this.props.id
    this.context.deleteIngredient(ingredientId)
    
  }

  render() {
    const { name, id, } = this.props
    return (
      <div className='asdf' key={id}>
        <h2 className='asdf'>
          {name}
        </h2>
        <button
          className="addIngredientButton"
          type='button'
          onClick={this.handleClickDelete}
        >
          REMOVE
        </button>
      </div>
    )
  }
}
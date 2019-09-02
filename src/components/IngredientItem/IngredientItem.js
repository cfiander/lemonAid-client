import React from 'react'
import RecipeContext from '../../contexts/RecipeContext'




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
      <>
        <h2>
          {name}
        </h2>
        <div className="lemonLogo">&#127819;</div>
        <button
          className="remove basicButton"
          type='button'
          onClick={this.handleClickDelete}
        >
          REMOVE
        </button>
      </>
    )
  }
}
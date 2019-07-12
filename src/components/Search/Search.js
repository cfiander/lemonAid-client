import React, { Component } from 'react'
import RecipeContext from '../../contexts/RecipeContext'
import uuid from 'uuid'
import {Link} from 'react-router-dom'


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          formValid: false,
            validationMessages: {
                name: '',
              }
        }
    }

    static contextType = RecipeContext;

    static defaultProps ={
        addIngredient: () => {},
      }

    updateName(name) {
        this.setState({name}, () => {this.validateName(name)});
      }

    validateName(fieldValue) {
        const fieldErrors = {...this.state.validationMessages};
        let hasError = false;
    
        fieldValue = fieldValue.trim();
        if(fieldValue.length === 0) {
          fieldErrors.name = 'Name is required';
          hasError = true;
        } else {
          if (fieldValue.length < 2) {
            fieldErrors.name = 'Name must be at least 3 characters long';
            hasError = true;
          } else {
            fieldErrors.name = '';
            hasError = false;
          }
        }
    
        this.setState({
          validationMessages: fieldErrors,
          nameValid: !hasError
        }, this.formValid );
    
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const ingredient = {
            key: uuid(),
            stateId: uuid(),
            name: this.state.name
        }
        this.context.addIngredient(ingredient)
    }

  render() { 
    return (
     <div>
      <h1 className="ingredientsList">Ingredient List</h1>
     <form className="" onSubmit={this.handleSubmit}>
     <label htmlFor="shopping-list-entry">Add an ingredient</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Search for..."
          ref={input => this.search = input}
          onChange={e => this.updateName(e.target.value)}
        />
        {/* <Suggestions results={this.state.results} /> */}
        <button type="submit" className="addIngredientButton">ADD INGREDIENT</button>
      </form>
      <br/>
      <Link to={`/recipes`}>
      <button type="submit" className="addIngredientButton">FIND RECIPES</button>
      </Link>
      </div>
    )
  }
}

export default Search

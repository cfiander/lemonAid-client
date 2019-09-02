import React, { Component } from 'react'
import RecipeContext from '../../contexts/RecipeContext'
import uuid from 'uuid'
import logo from '../../images/Lemon.jpg'
import ValidationError from '../../ValidationError'

import { } from "@fortawesome/free-solid-svg-icons";
import { } from "@fortawesome/react-fontawesome";

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

  static defaultProps = {
    addIngredient: () => { },
  }

  updateName(name) {
    this.setState({ name }, () => { this.validateName(name) });
  }

  validateName(fieldValue) {
    console.log(this.state)
    const fieldErrors = { ...this.state.validationMessages };
    let hasError = false;

    fieldValue = fieldValue.trim();

    if (fieldValue.length < 3) {
      fieldErrors.name = 'Ingredients must be at least 3 characters long';
      hasError = true;
    } else {
      fieldErrors.name = '';
      hasError = false;
    }

    this.setState({
      validationMessages: fieldErrors,
      nameValid: !hasError
    }, this.formValid);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.nameValid) {
      return;
    }
    const ingredient = {
      key: uuid(),
      stateId: uuid(),
      name: this.state.name
    }
    this.context.addIngredient(ingredient)
  }

  render() {
    return (
      <>
        <h1 className="ingredientTitle">Ingredient Table</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            id="ingredientName"
            placeholder="Type ingredient"
            ref={input => this.search = input}
            onChange={e => this.updateName(e.target.value)}
          />
          <button
            type="submit"
            className="addIngredientButton">
            <img className="logo" alt="logo" src={`${logo}`} />
            <div className="plus">&#x2b;</div>
          </button>
          <ValidationError hasError={!this.state.nameValid} message={this.state.validationMessages.name}/>  
        </form>
      </>
    )
  }
}

export default Search

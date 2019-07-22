import React, { Component } from 'react'
import RecipeContext from '../../contexts/RecipeContext'
import Ingredient from '../../components/IngredientItem/IngredientItem'
import './IngredientsPage.css'
import Search from '../../components/Search/Search';

export default class IngredientsPage extends Component {
    static defaultProps = {
        match: {
          params: {}
        }
    }

    static contextType = RecipeContext


    render() {
        const {ingredientsList = []} = this.context
        return (
        <section>
          <div className="searchForm">
          <Search/>
          </div>
          {/* The following commented out section is for a soon to come build with filtering optins */}
          {/* <ul className="filter-controls">
          <li>
            <select>
            <option value="" selected disabled hidden>Diet</option>
            <option value="keto">Keto</option>
            <option value="aleo">Paleo</option>
            <option value="rimal">Primal</option>
            <option value="frican">Pescetarian</option>
            <option value="egan">Vegan</option>
            <option value="egetarian">Vegetarian</option>
          </select>
          </li>
          <li>
          <select>
            <option value="" selected disabled hidden>Cuisine</option>
            <option value="african">African</option>
            <option value="american">American</option>
            <option value="british">British</option>
            <option value="cajun">Cajun</option>
            <option value="caribbean">Caribbean</option>
            <option value="chinese">Chinese</option>
            <option value="french">French</option>
            <option value="german">German</option>
            <option value="greek">Greek</option>
            <option value="indian">Indian</option>
            <option value="irish">Irish</option>
            <option value="italian">Italian</option>
            <option value="japanese">Japanese</option>
            <option value="jewish">Jewish</option>
            <option value="korean">Korean</option>
            <option value="latin American">Latin</option>
            <option value="mexican">Mexican</option>
            <option value="middle Eastern">Mediterranean</option>
            <option value="nordic">Nordic</option>
            <option value="spanish">Spanish</option>
            <option value="southern">Southern</option>
            <option value="thai">Thai</option>
            <option value="vietnamese">Vietnamese</option>
          </select>
          </li>
          <li>
          <select>
            <option value="" selected disabled hidden>Allergies</option>
            <option value="dairy">Dairy</option>
            <option value="egg">Egg</option>
            <option value="gluten">Gluten</option>
            <option value="peanut">Peanut</option>
            <option value="sesame">Sesame</option>
            <option value="seafood">Seafood</option>
            <option value="shellfish">Shellfish</option>
            <option value="soy">Soy</option>
            <option value="sulfite">Sulfite</option>
            <option value="tree Nut">Tree Nut</option>
            <option value="wheat">Wheat</option>
          </select>
          </li>
          <li>
          <select>
            <option value="" selected disabled hidden>Type</option>
            <option value="appetizer">Appetizer</option>
            <option value="breakfast">Breakfast</option>
            <option value="beverage">Beverage</option>
            <option value="bread">Bread</option>
            <option value="drink">Cocktail</option>
            <option value="dessert">Dessert</option>
            <option value="main course">Main</option>
            <option value="salad">Salad</option>
            <option value="sauce">Sauce</option>
            <option value="soup">Soup</option>
          </select>
          </li>
          </ul> */}
            <ul className="shopping-list js-shopping-list">
              {ingredientsList.map((ingredient, i) =>
                <li key={i} className="shopping-item">
                  <Ingredient
                    key={i}
                    id={ingredient.stateId}
                    name={ingredient.name}                    />
                </li>
              )}
            </ul>
        </section>
          )
        }
      }

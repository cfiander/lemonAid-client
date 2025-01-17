import React, { Component } from 'react'
import RecipeContext from '../../contexts/RecipeContext'
import RecipeApiService from '../../services/recipes-api-service'
import Recipes from '../../components/Recipes/Recipes'
import { Helmet } from "react-helmet";
export default class RecipePage extends Component {
    static contextType = RecipeContext

    componentDidMount() {
        // document.title = "Lemonaid";
        setTimeout(() => {
            const formatted = RecipeApiService.formatIngredients(this.context.ingredientsList)
            RecipeApiService.getRecipes(formatted)
                .then(this.context.setRecipeList)
                .catch(this.context.setError)
        }, 200)
    }


    renderRecipes() {
        const { recipeList = [] } = this.context
        return recipeList.map(recipe =>
            <Recipes
                key={recipe.id}
                recipe={recipe}
            />
        )
    }

    render() {
        const { error } = this.context
        return (
            <div className="recipeSection">
                <Helmet>
                    <title>Lemonaid</title>
                    <meta name="description" content="A list of recipes based on your search" />
                    <meta name="keywords" cpntent="recipe,registration" />
                </Helmet>
                <h1 className="recipeTitle">Your Recipes</h1>
                {/* <select>
                    <option value="" selected disabled hidden>Rank Results</option>
                    <option value="0">Minimize Missing Ingredients</option>
                    <option value="1">Maximize Used Ingredients</option>
                    <option value="2">Relevance To Search</option>
                </select> */}
                <ul className="recipeList">
                    {error ? <p className='red'>There was an error, try again</p>
                        : this.renderRecipes()}
                </ul>
            </div>

        )
    }
}
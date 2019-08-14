import React, { Component } from 'react'
import './Recipes.css'
import Iframe from 'react-iframe'
import RecipeApiService from '../../services/recipes-api-service'
import RecipeContext from '../../contexts/RecipeContext';

export default class Recipes extends Component {
    static contextType = RecipeContext

    state = {
        fullRecipe: false
    }

    componentDidMount() {
        const recipeId = this.props.recipe.id
        RecipeApiService.getRecipeURL(recipeId)
            .then(data => {
                this.context.setRecipeURL(data, recipeId)
            })
            .catch(this.context.setError)
    }

    createRecipeImage = () => {
        let innerArray = [];
        innerArray.push(`https://spoonacular.com/recipeImages/`)
        innerArray.push(this.props.recipe.id)
        innerArray.push(`-636x393`)
        innerArray.push('.jpg')
        const image = innerArray.join('')
        return image
    }


    renderMissedIngredients = () => {
        return this.props.recipe.missedIngredients.map((ingredient, i) => {
            return (
                <li key={i} className="missedIngredient"><div className="utensils">&#127869;</div>{ingredient.name}</li>
            )
        })
    }

    handleExpand = () => {
        this.context.setRecipeExpandedTrue(this.props.recipe.id)
    }

    handleCollapse = () => {
        this.context.setRecipeExpandedFalse(this.props.recipe.id)
    }

    handleViewFull = () => {
        this.context.setRecipeViewFullTrue(this.props.recipe.id)
    }

    handleReturn = () => {
        this.context.setRecipeReturn(this.props.recipe.id)
    }

    renderCollapsed = () => {
        const { recipe } = this.props
        console.log(recipe)
        return (
            <li className="recipeItem"
                style={{
                    background: ` url(${this.createRecipeImage()}) no-repeat center center`
                }}>
                <div className="recipeDetails">
                    <h2>{recipe.title}</h2>
                    <button onClick={this.handleExpand} className="expandButton">
                        <div className="expandArrow">&#x2965;</div>
                        <h3>Expand</h3>
                    </button>
                </div>
            </li>
        )
    }

    renderExpanded = () => {
        const { recipe } = this.props
        return (
            <li className="recipeItem" style={{
                background: `
              ), url(${this.createRecipeImage()}) no-repeat center center, `
            }}>
                <div className="recipeDetails">
                    <div className="expandedDetails">
                        <h2>{recipe.title}</h2>
                        <h3 className="missedTitle">
                            Missed Ingredients
                        </h3>
                        <ul className="missedIngredientList">
                            {this.renderMissedIngredients()}
                        </ul>
                    </div>
                    <button onClick={this.handleViewFull} className="expandButton">
                        <div className="expandArrow">&#x2965;</div>
                        <h3>View Full Recipe</h3>
                    </button>
                    <button onClick={this.handleCollapse} className="collapseButton">
                        <div className="collapseArrow">&#x2963;</div>
                        <h3>Collapse</h3>
                    </button>
                </div>
            </li>
        )
    }

    renderFullRecipe = () => {
        const { recipe } = this.props
        const recipeURL = recipe.recipeURL
        return (
            <li className="recipeItem">
                <button onClick={this.handleReturn}>
                    <div className="collapseArrow">&#x2963;</div>
                    <h4>Go Back</h4>
                </button>
                <Iframe url={`${recipeURL}`}
                    width="100%"
                    height="450px"
                    className="recipeItem" />
            </li>
        )
    }

    renderFunction = () => {
        if (this.props.recipe.expanded && this.props.recipe.fullRecipe) {
            return this.renderFullRecipe()
        }
        else if (this.props.recipe.expanded && !this.props.recipe.fullRecipe) {
            return this.renderExpanded()
        }
        else {
            return this.renderCollapsed()
        }
    }



    render() {
        return (
            <div className="miniSection">
                {/* <a rel="noopener" href={recipeURL}> */}
                {/* </a> */}
                {this.renderFunction()}

            </div>
        )
    }
}

import React, { Component } from 'react'
import './Recipes.css'
import Iframe from 'react-iframe'
import RecipeApiService from '../../services/recipes-api-service'
import RecipeContext from '../../contexts/RecipeContext';

export default class Recipes extends Component {
    static contextType = RecipeContext

    state = {
        fullRecipe : false
    }

    componentDidMount() {
        const recipeId = this.props.recipe.id
        RecipeApiService.getRecipeURL(recipeId)
            .then(data => {
                console.log(data)
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
            <li key={i}>{ingredient.name}</li>
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
        return (
            <>
            <li className="recipeItem one-edge-shadow" style ={ { background: `linear-gradient(
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)
    ), url(${this.createRecipeImage()}) no-repeat center center` } }>
                <h2>{recipe.title}</h2>
                <button onClick={this.handleExpand} className="expandButton"><h3>Expand</h3></button>
            </li>
            <br/>
            </>
        )
    }

    renderExpanded = () => {
        const { recipe } = this.props
        return (
            
            <li className="recipeItem one-edge-shadow" style ={ { background: `linear-gradient(
                rgba(0, 0, 0, 0.4),
                rgba(0, 0, 0, 0.4)
              ), url(${this.createRecipeImage()}) no-repeat center center, ` } }>
                <h2>{recipe.title}</h2>
                <h4>Likes:{recipe.likes}</h4>
                <h5>Missed Ingredients: {recipe.missedIngredientCount}</h5>
                <h5>Used Ingredients: {recipe.usedIngredientCount}</h5>
                <h4>
                    Missed Ingredients
                </h4>
                <ul className="">
                    {this.renderMissedIngredients()}
                </ul>
                <button onClick={this.handleViewFull} className="expandButton"><h3>View Full Recipe</h3></button>
                <button onClick={this.handleCollapse} className="collapseButton"><h3>Collapse</h3></button>
            </li>
        )
    }

    renderFullRecipe = () => {
        const {recipe} = this.props
        const recipeURL= recipe.recipeURL
        return (
            <li className="recipeItem one-edge-shadow">
            <h2>{recipe.title}</h2>
            <button onClick={this.handleReturn}><h4>Go Back</h4></button>
            <Iframe url={`${recipeURL}`}
            width="100%"
            height="450px"
            className="recipeItem"/>
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

import React from 'react'
import ingredients from '../store';

const RecipeContext = React.createContext({
    recipeList: [],
    ingredientsList: [],
    error: null,
    loggedIn: false,
    setError: () => {},
    clearError: () => {},
    setRecipeList: () => {},
    setIngredientsList: () => {},
    addIngredient: () => {},
    deleteIngredient: () => {},
    setLogInFalse: () => {},
    setLogInTrue: () => {},
    setRecipeURL: () => {},
    setRecipeExpanded: () => {},
    setRecipeViewFullTrue: () => {},
    setRecipeReturn: () => {},
})

export default RecipeContext

export class RecipeContextProvider extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            recipeList: [],
            ingredientsList: [],
            loggedIn: false,
            error: null, 
        }
    }

    componentDidMount() {
        this.setState({
              ingredientsList: ingredients
            })
    }

    setRecipeURL = (recipeURL, recipeId) => {
        const updatedRecipeList = [...this.state.recipeList] 
        updatedRecipeList.find(recipe => recipe.id === recipeId).recipeURL = recipeURL;
        this.setState({
            recipeList : updatedRecipeList
        })
    }

    setRecipeExpandedTrue = (recipeId) => {
        const updatedRecipeList = [...this.state.recipeList] 
        updatedRecipeList.find(recipe => recipe.id === recipeId).expanded = true;
        this.setState({
            recipeList : updatedRecipeList
        })
    }

    setRecipeExpandedFalse = (recipeId) => {
        const updatedRecipeList = [...this.state.recipeList] 
        updatedRecipeList.find(recipe => recipe.id === recipeId).expanded = false;
        this.setState({
            recipeList : updatedRecipeList
        })
    }

    setRecipeViewFullTrue = (recipeId) => {
        const updatedRecipeList = [...this.state.recipeList] 
        updatedRecipeList.find(recipe => recipe.id === recipeId).fullRecipe = true;
        this.setState({
            recipeList : updatedRecipeList
        })
    }
    
    setRecipeReturn = (recipeId) => {
        const updatedRecipeList = [...this.state.recipeList] 
        updatedRecipeList.find(recipe => recipe.id === recipeId).fullRecipe = false;
        this.setState({
            recipeList : updatedRecipeList
        })
    }

    setRecipeList = recipeList => {
        this.setState({ recipeList })
    }

    setLogInFalse = () => {
        this.setState({
            loggedIn : false
        })
    }

    findRecipeById = recipeId => {
        const recipe = this.state.recipeList.find(recipe =>
            recipe.id === recipeId
          )
        return recipe
    }


    // deleteRecipe = recipe => {
    //     const newRecipeList = this.state.recipeList.filter(recipe =>
    //         recipe !== recipe
    //       )
    //       this.setState({
    //         recipeList: newRecipeList
    //       })
    // }

    setLogInTrue = () => {
        this.setState({
            loggedIn : true
        })
    }

    setError = error => {
        console.error(error)
        this.setState({ error })
    }
    
    clearError = () => {
        this.setState({ error: null })
    }

    addIngredient = ingredient => {
        this.setState({
          ingredientsList: [ ...this.state.ingredientsList, ingredient ],
        })
      }

    deleteIngredient = ingredientId => {
        const newIngredients = this.state.ingredientsList.filter(ingredient =>
          ingredient.stateId !== ingredientId
        )
        this.setState({
          ingredientsList: newIngredients
        })
      }
    
    
    render() {
        const value = {
        ingredientsList: this.state.ingredientsList,
        error: this.state.error,
        setError: this.setError,
        loggedIn: this.state.loggedIn,
        setLogInFalse: this.setLogInFalse,
        setLogInTrue: this.setLogInTrue,
        clearError: this.clearError,
        addIngredient: this.addIngredient,
        deleteIngredient: this.deleteIngredient,
        recipeList: this.state.recipeList,
        setRecipeList: this.setRecipeList,
        setRecipeURL: this.setRecipeURL,
        findRecipeById: this.findRecipeById,
        setRecipeExpandedTrue: this.setRecipeExpandedTrue,
        setRecipeExpandedFalse: this.setRecipeExpandedFalse,
        setRecipeViewFullTrue: this.setRecipeViewFullTrue,
        setRecipeReturn: this.setRecipeReturn,
    }
    return (
            <RecipeContext.Provider value={value}>
            {this.props.children}
            </RecipeContext.Provider>
        )
    }
}
import React from 'react'
import { connect } from 'react-redux'
import Recipes from '../components/Recipes'
import { addToRecipe, addRecipe, deleteRecipe } from '../actions/'


const RecipesContainer = ({allIngridients, thisIngridients, recipes, addToRecipe, addRecipe, deleteRecipe}) => (
  <Recipes allIngridients = {allIngridients}
    thisIngridients = {thisIngridients}
    recipes = {recipes}
    addToRecipe = { (item) => addToRecipe(item) }
    addRecipe = { (recipe) => addRecipe(recipe) }
    deleteRecipe = { (item) => deleteRecipe(item) }
   />
)

const mapStateToProps = (state) => {
  return {
    allIngridients : state.ingridients.totalIngridients,
    thisIngridients: state.recipes.currentRecipe,
    recipes: state.recipes.recipes
  }
}


export default connect(
  mapStateToProps,
  { addToRecipe, addRecipe, deleteRecipe }
)( RecipesContainer )


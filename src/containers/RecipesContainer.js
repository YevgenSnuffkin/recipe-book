import React from 'react'
import { connect } from 'react-redux'
import Recipes from '../components/Recipes'
import { addToRecipe, addRecipe } from '../actions/'


const RecipesContainer = ({allIngridients, thisIngridients, recipes, addToRecipe, addRecipe}) => (
  <Recipes allIngridients = {allIngridients}
    thisIngridients = {thisIngridients}
    recipes = {recipes}
    addToRecipe = { (item) => addToRecipe(item) }
    addRecipe = { (recipe) => addRecipe(recipe) }
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
  { addToRecipe, addRecipe }
)( RecipesContainer )


import React from 'react'
import { connect } from 'react-redux'
import SearchInput, {createFilter} from 'react-search-input'
import { searchFor } from '../actions/'

// we need to get all recipes and a search term from store

const SearchContainer = ({ searchTerm, recipes, searchFor }) => {
  
  const KEYS_TO_FILTERS = ['recipe.name', 'recipe.ing']

  const filteredRecipes = recipes.filter(createFilter(searchTerm, KEYS_TO_FILTERS))

  const searchUpdated = (e) => {
  	console.log(filteredRecipes)
  	searchFor(e)
  }

  //search for recipes by name or ingridients
  const searchResults = filteredRecipes.map(recipe => {
    return(       
    <div className="foundRecipes" key={recipe.recipe.name}>
      <div className="subject">{recipe.recipe.name} recipe:</div>
      <div className="recipeName">Ingridients: <ul> {recipe.recipe.ing.map(item =><li>add {item},</li>)} </ul></div>
    </div>    
    )     
  })
  
  return (
    <div  className="whiteWrapper">
    	
    	<form className="pure-form"><SearchInput className="pure-input" onChange={searchUpdated} /></form>
    	Search Results: 
		{searchResults}    	

    </div>
    )
}

const mapStateToProps = (state) => {
  return {
    searchTerm : state.search.searchTerm,
    recipes: state.recipes.recipes
  }
}

export default connect(
	mapStateToProps,
	{ searchFor },
)( SearchContainer )
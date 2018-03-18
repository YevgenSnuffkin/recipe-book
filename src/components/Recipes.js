import React from 'react';

import '../stylesheets/recipes.css'

const Recipes = ({allIngridients, thisIngridients, recipes, addToRecipe, addRecipe, deleteRecipe }) => {

  let recipeName
	 	
  const onRecipeSubmit = e => {
    e.preventDefault()
  	//field must not be empty 
  	if(recipeName.value === ""){
  	  alert("field cannot be emty")
  	}
  	else{
  	  addRecipe(recipeName.value)
  	}
  }

	const thisIng = thisIngridients.map(item => <li key = {item}>{item}

	</li>)

	const allIng = allIngridients.map(item => <li key = {item.name}>{item.name}
	<button className="pure-button pure-button-primary" onClick = { () => addToRecipe(item.name) }>Add</button></li>)

	const recipesMap = recipes.map(item => <li key = {recipes.indexOf(item)}>{item.recipe.name}
	<button className="pure-button" onClick = { () => deleteRecipe(item) }>
		<i className="fas fa-trash"></i>
		Delete
	</button></li>)

	return (
		<div className="whiteWrapper">

		All Ingridients:
	    <ul>{allIng}</ul>

	    New Recipe:
	    <ul>{thisIng}</ul>

	    All Recipes:
	    <div><ul>{recipesMap}</ul></div>

		<div className="pure-form">
			    <form onSubmit = { onRecipeSubmit }>
			      <input type = 'text' placeholder='Name Your Recipe'
			        ref = { el => recipeName = el } />
			      <button className="pure-button pure-button-primary">Submit</button>
			    </form>
		</div>

	    </div>
	)
}

export default Recipes
import React from 'react';

const Recipes = ({allIngridients, thisIngridients, recipes, addToRecipe, addRecipe }) => {

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
	<button>Remove</button></li>)

	const allIng = allIngridients.map(item => <li key = {item.name}>{item.name}
	<button onClick = { () => addToRecipe(item.name) }>Add</button></li>)

	const recipesMap = recipes.map(item => <li key = {recipes.indexOf(item)}>{item.recipe.name}
	<button>Delete</button></li>)

	return (
		<div>
	    <ul>{allIng}</ul>
	    <ul>{thisIng}</ul>
	    <div className = "recipeBox"><ul>{recipesMap}</ul></div>
	    <form onSubmit = { onRecipeSubmit }>
	      <input type = 'text' placeholder='Name Your Recipe'
	        ref = { el => recipeName = el } />
	      <button>Submit</button>
	    </form>
	    </div>
	)
}

export default Recipes
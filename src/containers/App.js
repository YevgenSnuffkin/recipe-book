import React from 'react'
import IngridientsContainer from './IngridientsContainer'
import RecipesContainer from './RecipesContainer'
import SearchContainer from './SearchContainer'
import { Route, Link } from 'react-router-dom'

const App = () => {
    return(
    	<div>
	    	<header>
		      	<Link to="/">Ingridients</Link>
		      	<Link to="/myrecipes">Recipes</Link>
		      	<Link to="/search">Search Recipe</Link>
		    </header>

		    <main>
		      	<Route exact path="/" component={IngridientsContainer} />
		      	<Route exact path="/myrecipes" component={RecipesContainer} />
		      	<Route exact path="/search" component={SearchContainer} />
		    </main>
	    </div>
    )
}
export default App;
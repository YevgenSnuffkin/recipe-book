import React from 'react'
import IngridientsContainer from './IngridientsContainer'
import RecipesContainer from './RecipesContainer'
import SearchContainer from './SearchContainer'
import { Route, Link } from 'react-router-dom'
import '../stylesheets/navigation.css'

const App = () => {
    return(
    	<div>
	    	<header>
	    	<ul className="pure-menu-list pure-menu-horizontal">
		      	<li className="pure-menu-item" ><Link to="/" className="pure-menu-link">Ingridients</Link></li>
		      	<li className="pure-menu-item" ><Link to="/myrecipes" className="pure-menu-link">Recipes</Link></li>
		      	<li className="pure-menu-item" ><Link to="/search" className="pure-menu-link">Search Recipe</Link></li>
		    </ul>
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
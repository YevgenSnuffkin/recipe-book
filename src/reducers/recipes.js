export const recipes = ( state = {
        recipes: [],
        currentRecipe: [],
        error: null
	}, action) => {

    switch ( action.type ) {
        // push name and currentRecipe
        // clear current recipe
        case 'ADD_RECIPE' : {
            return {
                ...state,
                recipes: [ ...state.recipes, { recipe : { name: action.payload, ing: state.currentRecipe} } ],
                currentRecipe: []
                }
        }

        case 'ADD_TO_RECIPE' : {
            return {
                ...state,
                currentRecipe: [...state.currentRecipe, action.payload ]
            }   
        }

        case 'DELETE_RECIPE' : {
            return {}

                
        }
        
        default: 
            return state
    }
}
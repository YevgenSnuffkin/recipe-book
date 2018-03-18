export const search = ( state = {
        searchTerm: "",
        error: null
	}, action) => {

    switch ( action.type ) {
       
        case 'SEARCH' : {
            return {
                ...state,
                searchTerm: action.payload
                }
        }
        
        default: 
            return state
    }
}
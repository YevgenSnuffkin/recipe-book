export const ingridients = ( state = {
        totalIngridients: [],
        error: null
	}, action) => {

    switch ( action.type ) {

        case 'NEW_INGRIDIENT' : {
            return {
                ...state,
                totalIngridients: [ ...state.totalIngridients, action.payload ]
            }
        }

        case 'DELETE_INGRIDIENT' : {
            return {
                ...state,
                totalIngridients: state.totalIngridients.filter(item => item !== action.payload)
            }
        }

        case 'ALL_INGRIDIENTS' : {
            return {
                state
            }
        }

        case 'TOGGLE_EDIT' : {
            return {
                ...state,
                totalIngridients: state.totalIngridients.map( item => (item.name === action.payload)?{ name:item.name, editing : true }:item)
            }
        }

        case 'EDIT' : {
            //insert action.payload, where editing === true 
            return {
                ...state,
                totalIngridients: state.totalIngridients.map( item => (item.editing === true)?{ name:action.payload, editing : false }:item)
            }
        }
        
        default: 
            return state
    }
}
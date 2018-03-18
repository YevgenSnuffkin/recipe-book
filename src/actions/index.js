
export const newSubmitted = (ingridient) => (dispatch) => {
  dispatch({type: 'NEW_INGRIDIENT', payload: ingridient})
}

export const getAll = () => (dispatch) => {
  dispatch({type: 'ALL_INGRIDIENTS'})
}

export const editIngridient = (id) => (dispatch) => {
  dispatch({type: 'EDIT', payload: id})
}

export const deleteIngridient = (id) => (dispatch) => {
  dispatch({type: 'DELETE_INGRIDIENT', payload: id})
}

export const toggleEditing = (id) => (dispatch) => {
  dispatch({type: 'TOGGLE_EDIT', payload:id})
}

export const addToRecipe = (item) => (dispatch) => {
  dispatch({type: 'ADD_TO_RECIPE', payload: item})
}

export const addRecipe = (recipe) => (dispatch) => {
  dispatch({type: 'ADD_RECIPE', payload:recipe })
}

export const deleteRecipe = (id) => (dispatch) => {
  dispatch({type: 'DELETE_RECIPE', payload: id})
}

export const searchFor = (term) => (dispatch) => {
  dispatch({type: 'SEARCH', payload: term})
}
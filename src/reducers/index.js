import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { ingridients } from './ingridients'
import { recipes } from './recipes'
import { search } from './search'
 

const combinedReducers = combineReducers({
  	ingridients,
  	recipes,
  	search,
  	routerReducer
})

export default combinedReducers
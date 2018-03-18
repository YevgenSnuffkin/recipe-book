import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
import createHistory from 'history/createBrowserHistory'

export const history = createHistory()

const middleware = [ thunk, routerMiddleware(history) ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)
	
export default store
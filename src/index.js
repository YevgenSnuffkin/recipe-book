import React from 'react'
import ReactDOM from 'react-dom'
import './stylesheets/index.css'
import App from './containers/App'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';

const app = document.getElementById('root')

ReactDOM.render(
	 <Provider store={store}>
	    <ConnectedRouter history={history}>
	    <div>
	        <App />
	    	</div>
	    </ConnectedRouter>
	</Provider>
, app);
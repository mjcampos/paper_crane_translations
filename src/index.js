import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from './components/App';
import "./styles.css";

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers';

var store = createStore(rootReducer);

store.subscribe(() => console.log('store', store.getState()));

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Route path="/" component={App}/>
		</Router>
	</Provider>,
	document.getElementById('root')
);
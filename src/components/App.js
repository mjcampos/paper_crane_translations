import React, {Component} from 'react';
import Nav from './Nav';
import English from '../english/English';
import German from '../german/German';
import {Route} from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<div>
				<Nav/>

				<Route exact path="/" component={English}/>
				<Route exact path="/german" component={German}/>
			</div>
		);
	}
}

export default App;
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Form} from 'react-bootstrap';
import {findFact} from '../../actions/index';

class Inputbox extends Component {
	constructor(props) {
		super(props);

		this.state = {
			code: ""
		}
	}

	handleSubmit = e => {
		e.preventDefault();

		this.props.findFact(this.state.code);
	}

	render() {
		var requiredClicks = 0;

		return (
			<Form hidden={this.props.clicks >= requiredClicks ? false : true} onSubmit={this.handleSubmit}>
				<Form.Group>
					<Form.Label>Congratulations! You've found my Easter Egg.</Form.Label>
					<Form.Control value={this.state.code} onChange={(e) => this.setState({code: e.target.value})}/>
				</Form.Group>
			</Form>
		);
	}
}

var mapStateToProps = state => state;

export default connect(mapStateToProps, {findFact})(Inputbox);
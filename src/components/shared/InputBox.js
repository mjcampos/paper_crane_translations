import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Form} from 'react-bootstrap';

class Inputbox extends Component {
	constructor(props) {
		super(props);

		this.state = {
			code: ""
		}
	}

	handleSubmit = e => {
		e.preventDefault();
		console.log(this.state);
	}

	render() {
		var requiredClicks = 0;

		return (
			<Form hidden={this.props.clicks >= requiredClicks ? false : true} onSubmit={this.handleSubmit}>
				<Form.Control value={this.state.code} onChange={(e) => this.setState({code: e.target.value})}/>
			</Form>
		);
	}
}

var mapStateToProps = state => state;

export default connect(mapStateToProps, null)(Inputbox);
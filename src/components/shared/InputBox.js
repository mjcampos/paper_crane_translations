import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Form} from 'react-bootstrap';

class Inputbox extends Component {
	render() {
		return (
			<Form hidden={this.props.clicks >= 3 ? false : true}>
				<Form.Group>
					<Form.Control type="text" placeholder="Something"/>
				</Form.Group>
			</Form>
		);
	}
}

var mapStateToProps = state => state;

export default connect(mapStateToProps, null)(Inputbox);
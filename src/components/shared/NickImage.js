import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Image} from 'react-bootstrap';
import {increment} from '../../actions';

class NickImage extends Component {
	render() {
		return (
			<Image onClick={() => this.props.increment()} src="../assets/nick.jpg" fluid/>
		);
	}
}

export default connect(null, {increment})(NickImage);
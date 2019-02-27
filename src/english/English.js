import React, {Component} from 'react';
import {Container, Nav} from 'react-bootstrap';
import Profile from './Profile';
import Services from './Services';
import Prices from './Prices';
import Contact from './Contact';

class English extends Component {
	constructor(props) {
		super(props);

		this.state = {
			tab: "profile"
		}
	}

	renderSwitch() {
		switch(this.state.tab) {
			case 'profile':
				return <Profile/>;
			case 'services':
				return <Services/>;
			case 'prices':
				return <Prices/>;
			case 'contact':
				return <Contact/>;
			default:
				return <Profile/>
		}
	}

	render() {
		return (
			<Container>
				<Nav variant="tabs" activeKey={this.state.tab} onSelect={(tab) => this.setState({tab})}>
					<Nav.Item><Nav.Link eventKey="profile">Profile</Nav.Link></Nav.Item>
					<Nav.Item><Nav.Link eventKey="services">Services</Nav.Link></Nav.Item>
					<Nav.Item><Nav.Link eventKey="prices">Prices</Nav.Link></Nav.Item>
					<Nav.Item><Nav.Link eventKey="contact">Contact Information</Nav.Link></Nav.Item>
				</Nav>

				{this.renderSwitch()}
			</Container>
		);
	}
}

export default English;
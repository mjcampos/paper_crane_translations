import React, {Component} from 'react';
import {Container, Nav} from 'react-bootstrap';
import Profil from './Profil';
import Service from './Service';
import Preise from './Preise';
import Kontakt from './Kontakt';

class German extends Component {
	constructor(props) {
		super(props);

		this.state = {
			tab: "profil"
		}
	}

	renderSwitch() {
		switch(this.state.tab) {
			case 'profil':
				return <Profil/>;
			case 'service':
				return <Service/>;
			case 'preise':
				return <Preise/>;
			case 'kontakt':
				return <Kontakt/>;
			default:
				return <Profil/>
		}
	}

	render() {
		return (
			<Container>
				<Nav variant="tabs" activeKey={this.state.tab} onSelect={(tab) => this.setState({tab})}>
					<Nav.Item><Nav.Link eventKey="profil">Profil</Nav.Link></Nav.Item>
					<Nav.Item><Nav.Link eventKey="service">Service</Nav.Link></Nav.Item>
					<Nav.Item><Nav.Link eventKey="preise">Preise</Nav.Link></Nav.Item>
					<Nav.Item><Nav.Link eventKey="kontakt">Kontakt</Nav.Link></Nav.Item>
				</Nav>

				{this.renderSwitch()}
			</Container>
		);
	}
}

export default German;
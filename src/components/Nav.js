import React from 'react';
import {Navbar, Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Nav = () => {
	return (
		<Navbar bg="dark" variant="dark" fixed="top">
			<Navbar.Brand><Link to="/"><Image src="./assets/logo.jpg" alt="Logo" height="32" width="32" fluid/></Link></Navbar.Brand>

			<Navbar.Brand className="title">Paper Crane Translations</Navbar.Brand>

			<Navbar.Collapse className="justify-content-end">
				<Navbar.Brand><Link to="/"><Image src="./assets/uk.jpg" height="30" width="60" fluid/></Link></Navbar.Brand>
				<Navbar.Brand><Link to="/german"><Image src="./assets/germany.jpg" height="30" width="60" fluid/></Link></Navbar.Brand>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default Nav;
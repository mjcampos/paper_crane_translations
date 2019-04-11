import React from 'react';
import {Row, Col} from 'react-bootstrap';

const Contact = () => {
	return (
		<div>
			<h1 className="text-center">Contact Information</h1>

			<Row>
				<Col sm={4}>
					<h2><u>Mailing Address:</u></h2>
				</Col>
			</Row>

			<Row>
				<Col sm={{span: 4, offset:4}}>
					<h3>Nicholas Peterson</h3>
					<p>N&uuml;rnberger Str. 114a</p>
					<p>96050 Bamberg</p>
					<p>Germany</p>
				</Col>
			</Row>

			<Row>
				<Col sm={4}>
					<address><u>E-Mail:</u></address>
				</Col>
			</Row>

			<Row>
				<Col sm={{span: 4, offset: 4}}>
					<address><a href="mailto:nickppeterson@gmail.com">nickppeterson@gmail.com</a></address>
					
				</Col>
			</Row>
		</div>
	);
}

export default Contact;
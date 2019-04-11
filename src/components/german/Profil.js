import React from 'react';
import {Row, Col} from 'react-bootstrap';
import NickImage from '../shared/NickImage';

const Profil = () => {
	return (
		<div>
			<h1 className="text-center">Profil</h1>

			<Row>
				<Col sm={9}>
					<p>&Uuml;bersetzung ist die pr&auml;zise Wiedergabe eines Ausdrucks in einer anderen Sprache. Ein erfahrener &Uuml;bersetzer ben&ouml;tigt professionelle und praktische Kompetenz, jahrelange Erfahrung und die muttersprachliche Intuition der Zielsprachen. Die geringere Kompetenz des Auftraggebers in den Zielsprachen f&uuml;hrt h&auml;ufig dazu, dass dieser die Qualit&auml;t einer &Uuml;bersetzung kaum angemessen einsch&auml;tzen kann. Vertrauen ist daher die beste Qualit&auml;tssicherung f&uuml;r Kunden von &Uuml;bersetzungsdienstleistungen.</p>
					<p>Ich bin ein bilingual Englisch-Deutscher Muttersprachler mit einem Bachelor in Germanistik und arbeite aktuell an meinem Master in Linguistik (Sprachwissenschaften). Ich verf&uuml;ge &uuml;ber die formale Bildung in den linguistischen Strukturen des Deutschen und Englischen und besitze gleichzeitig die muttersprachliche Intuition beider Sprachen. Hinzu kommt meine mehrj&auml;hrige Erfahrung mit &Uuml;bersetzungen. Wenn Sie etwas &uuml;bersetzt haben möchten oder Nachhilfe in deutscher oder englischer Sprache ben&ouml;tigen, dann bin ich genau der Richtige f&uuml;r den Job!</p>
				</Col>
				
				<Col sm={3}><NickImage/></Col>
			</Row>
		</div>
	);
}

export default Profil;
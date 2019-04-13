import React from 'react';
import {Row, Col} from 'react-bootstrap';
import NickImage from '../shared/NickImage';
import InputBox from '../shared/InputBox';

const Profile = () => {
	return (
		<div>
			<h1 className="text-center">Profile</h1>

			<Row>
				<Col sm={9}>
					<p>Translating is the proper rendering of a statement into another language. An adept translator requires professional and practical skill, years of experience and a native speaker’s intuition of the target languages. The lack of competency of the consumer in the language that a text is to be translated in means that the quality of a translation often eludes a client. Trust is the best quality assurance for customers of translation services.</p>
					<p>I am a native bilingual German-English speaker with a bachelor’s degree in German and I’m currently working on a Master’s Degree in Linguistics. I am educated in the linguistic structures of both English and German and, simultaneously, I have a native intuition of both languages. Furthermore, I have years of translating experience. If you need something translated into either English or German or need Language Tutoring, then I’m your ideal candidate for getting the job done!</p>
				</Col>
				
				<Col sm={3}>
					<NickImage/>
					<InputBox/>
				</Col>
			</Row>
		</div>
	);
}

export default Profile;
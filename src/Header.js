import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


function Header() {
	return (
		<header>
			<Container className="p-3">
				<Row>
					<h1 className="text-center mt-2">Can I use...?</h1>
				</Row>
			</Container>
			<Container>
				<Row className="p-3 rounded-3">
					<p className="lead text-center">
						Quick look for a certain css property and check for its current
						support!
					</p>
				</Row>
			</Container>
		</header>
	);
}

export default Header;

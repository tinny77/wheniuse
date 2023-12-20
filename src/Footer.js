import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function Footer() {
	return (
		<footer>
			<Container className="p-3">
				<Row className="p-2 text-center">
					<small>
						Data from{' '}
						<a href="https://caniuse.com/" target="_blank" rel="noreferrer">
							Caniuse.com
						</a>
						.<br />
						Created by Filippo Tinnirello.
					</small>
				</Row>
			</Container>
		</footer>
	);
}

export default Footer;

import React from 'react'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

function Footer() {
	return (
		<footer>
			<Container className="p-3">
				<Row className="p-3 rounded-3 pt-4 text-center">
					<small>
						Based on and inspired by the awesome{' '}
						<a href="https://caniuse.com/" target="_blank" rel="noreferrer">
							Caniuse.com
						</a>
						.<br />
						Created by Filippo Tinnirello.
					</small>
				</Row>
			</Container>
		</footer>
	)
}

export default Footer

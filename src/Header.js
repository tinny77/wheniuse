import React from 'react'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

function Header() {
	return (
		<header>
			<Container className="p-3">
				<Row>
					<h1 className="text-center mt-2">Wheniuse</h1>
				</Row>
			</Container>
			<Container>
				<Row className="p-3 rounded-3">
					<p className="lead">
						Ever found yourself waiting for that new css property that isn't
						widely available yet, and wanted to start using it as soon as a
						certain percentage of users had been reached?
					</p>
					<p className="lead">
						With this tool, you'll be able to search for a certain css property
						and be notified as soon as it will be safe to use it inside your
						projects!
					</p>
				</Row>

			</Container>
		</header>
	)
}

export default Header

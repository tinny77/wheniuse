import { useContext } from 'react';

import { DataContext } from './DataContext';

import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

function SearchBar() {
	const { searchText, handleSearch, handleChange } = useContext(DataContext);
	return (
		<Container>
			<Row className="p-3 pb-0 align-items-center">
				<Form.Label column sm={2}>
					<Form.Label htmlFor="searchInput" className="m-0">
						Search:
					</Form.Label>
				</Form.Label>
				<Col sm={10}>
					<Form.Control
						id="searchInput"
						placeholder=""
						type="text"
						value={searchText}
						onChange={(e) => handleSearch(e.target.value)}
						className="rounded-2"
					/>
				</Col>
			</Row>
			<Row className="p-3 pt-2">
				<Form.Label column sm={2}></Form.Label>
				<Col sm={10}>
					<Form.Check
						type="switch"
						id="custom-switch"
						label="Include partially supported browsers"
						onChange={handleChange}
					/>
				</Col>
			</Row>
		</Container>
	);
}

export default SearchBar;

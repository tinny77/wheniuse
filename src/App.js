//import logo from './logo.svg'
import { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Header from './Header'
import Footer from './Footer'
import './App.scss'

function App() {
	const showProgress = function (val) {
		let variantClass = 'danger'
		if (val > 40) variantClass = 'secondary'
		if (val > 60) variantClass = 'info'
		if (val > 75) variantClass = 'warning'
		if (val > 90) variantClass = 'success'
		return <ProgressBar variant={variantClass} now={val} className="mt-3" />
	}

	const [isLoaded, setIsLoaded] = useState(false)
		const [searchText, setSearchText] = useState('')
	const [checked, setChecked] = useState(false)

	const [data, setData] = useState([])
	const apiUrl_full =
		'https://raw.githubusercontent.com/Fyrd/caniuse/main/fulldata-json/data-1.0.json'

     const handleChange = () => {
		setChecked(!checked)
	}

	const getData = () => {
		fetch(apiUrl_full)
			.then(function (response) {
				//console.log(response)
				return response.json()
			})
			.then(function (myJson) {
				setIsLoaded(true)
				setData(myJson.data)
			})
	}

	useEffect(() => {
		getData()
	}, [])

	return (
		<div className="App">
			<Header />

			<Container>
				<Row className="p-3 pb-0 rounded-3 align-items-center">
					{/* <span className="sr-only">Search here your property</span> */}
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
							onChange={({ target }) => setSearchText(target.value)}
							disabled={!isLoaded ? true : false}
						/>
					</Col>
				</Row>
				<Row className="p-3 pt-2">
					<Form.Label column sm={2}></Form.Label>
					<Col sm={10}>
						<Form.Check
							type="switch"
							id="custom-switch"
							label="Hide low-popular (under 65%) features"
							onChange={handleChange}
						/>
					</Col>
				</Row>
			</Container>
			{!isLoaded && (
				<Container>
					<Row
						className="p-5 bg-darker rounded-3 my-3 text-centeralign-items-center justify-content-center"
						key="0"
					>
						<Spinner animation="grow" />
					</Row>
				</Container>
			)}
			{data && Object.keys(data)
				.filter((key) =>
					data[key].title.toLowerCase().includes(searchText.toLowerCase())
				)
				.filter((key) =>
					data[key].usage_perc_y > (checked ? 65 : 0)
				)
				.map((key) => (
					<Container className="p-3 bg-dark rounded-3 my-3" key={key}>
						<strong className="h5 mb-2 d-block">{data[key].title}</strong>
						{data[key].description}
						<br />
						{showProgress(data[key].usage_perc_y)}
						<em className="small">{data[key].usage_perc_y}%</em>
					</Container>
				))
			}
			{
				data.isEmpty && (
				<Container>No reuslts</Container>
				)
			}

			<Footer />
		</div>
	)
}

export default App

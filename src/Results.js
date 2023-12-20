import { DataContext } from './DataContext';

import { useContext } from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Spinner from 'react-bootstrap/Spinner';

function Results() {
	const { data, filteredData, isLoaded, checked } = useContext(DataContext);

	const showProgress = function (val) {
		let variantClass = 'danger';
		if (val > 50) variantClass = 'secondary';
		if (val > 65) variantClass = 'info';
		if (val > 80) variantClass = 'warning';
		if (val > 95) variantClass = 'success';
		return <ProgressBar variant={variantClass} now={val} className="mt-3" />;
	};

	return (
		<>
			{!isLoaded && (
				<Container>
					<Row
						className="p-5 bg-darker rounded-3 my-3 text-center align-items-center justify-content-center"
						key="0"
					>
						<Spinner animation="grow" />
					</Row>
				</Container>
			)}
			{isLoaded && filteredData.length === 0 && (
				<Container className="p-5 text-center rounded-3 my-4">
					No results
				</Container>
			)}
			<Container>
				<Row className="mx-3">
					{!!filteredData &&
						filteredData.map((key) => (
							<Container className="p-3 bg-dark rounded-3 my-3" key={key}>
								<strong className="h5 mb-2 d-block feature-title">
									{data[key].title}
								</strong>
								{data[key].description}
								<br />
								{showProgress(
									checked
										? data[key].usage_perc_y + data[key].usage_perc_a
										: data[key].usage_perc_y
								)}
								<em className="small">
									{(checked
										? data[key].usage_perc_y + data[key].usage_perc_a
										: data[key].usage_perc_y
									).toFixed(0)}
									%
								</em>
							</Container>
						))}
				</Row>
			</Container>
		</>
	);
}

export default Results;

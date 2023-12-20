import React, { createContext, useState, useEffect } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
	const API_URL =
		'https://raw.githubusercontent.com/Fyrd/caniuse/main/fulldata-json/data-1.0.json';
	const [data, setData] = useState([]);
	const [filteredData, setfilteredData] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);

	const getData = () => {
		setIsLoaded(false);
		fetch(API_URL)
			.then(function (response) {
				return response.json();
			})
			.then(function (json) {
				setData(json.data);
				filterData(json.data);
				setIsLoaded(true);
				//console.log(data['css-nesting']);
				//console.log(json.data);
			});
	};

	const [searchText, setSearchText] = useState('');
	const [checked, setChecked] = useState(true);

	const handleChange = () => {
		setChecked((c) => !c);
	};

	const handleSearch = (text) => {
		setSearchText(text);
		filterData(data);
	};

	const filterData = (data) => {
		const filteredKeys = Object.keys(data).filter((key) =>
			data[key].title.toLowerCase().includes(searchText.toLowerCase())
		);
		//const filteredItems = filteredKeys.map((key) => data[key]);
		setfilteredData(filteredKeys);
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<DataContext.Provider
			value={{
				data,
				filteredData,
				isLoaded,
				checked,
				searchText,
				handleSearch,
				handleChange,
			}}
		>
			{children}
		</DataContext.Provider>
	);
};

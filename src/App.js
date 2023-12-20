import React from 'react';
import { DataProvider } from './DataContext';

import Header from './Header';
import SearchBar from './SearchBar';
import Results from './Results';
import Footer from './Footer';
import './App.scss';

function App() {
	return (
		<div className="App">
			<Header />
			<DataProvider>
				<SearchBar />
				<Results />
			</DataProvider>
			<Footer />
		</div>
	);
}

export default App;

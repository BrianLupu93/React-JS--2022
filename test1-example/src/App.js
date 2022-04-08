import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
	const [ country, setCountry ] = useState([ 'romania' ]);

	useEffect(() => {
		async function universityRequest() {
			const response = await fetch(`http://universities.hipolabs.com/search?country=${country}`);
			const data = await response.json();
			console.log(data);
		}
		universityRequest();
	}, []);

	return (
		<div>
			<h1>Search University</h1>
		</div>
	);
};

export default App;

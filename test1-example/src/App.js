import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
	const [ inputCountry, setInputCountry ] = useState('');
	const [ country, setCountry ] = useState('');
	const [ universities, setUniversities ] = useState([]);
	const [ test, setTest ] = useState('');

	const countryNameImputed = (event) => {
		const inputString = event.target.value;
		setInputCountry(inputString);
	};

	const submitCountryName = (event) => {
		setCountry(inputCountry);
	};

	console.log(country);

	useEffect(() => {
		fetch(`http://universities.hipolabs.com/search?country=${country}`)
			.then((response) => response.json())
			.then((unv) => setUniversities({ unv }));
	}, []);

	console.log(universities);

	return (
		<div>
			<h1>Search University</h1>
			<p>Type the country</p>
			<input className="countryInputString" type="text" placeholder="ex: Italy" onChange={countryNameImputed} />
			<button className="submitButton" type="submit" onClick={submitCountryName}>
				OK
			</button>
		</div>
	);
};

export default App;

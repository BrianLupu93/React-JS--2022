import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
	const [ country, setCountry ] = useState('');
	const [ universities, setUniversities ] = useState([]);

	const countryNameImputed = (event) => {
		const inputString = event.target.value;
		setCountry(inputString);
	};

	const submitCountryName = (event) => {
		fetch(`http://universities.hipolabs.com/search?country=${country}`)
			.then((response) => response.json())
			.then((unv) => setUniversities(unv));
	};

	return (
		<div>
			<h1>Search University</h1>
			<p>Type the country</p>
			<input className="countryInputString" type="text" placeholder="ex: Italy" onChange={countryNameImputed} />
			<button className="submitButton" type="submit" onClick={submitCountryName}>
				OK
			</button>
			<ul>
				{universities.map((unv) => {
					return <li>{unv.name}</li>;
				})}
			</ul>
		</div>
	);
};

export default App;

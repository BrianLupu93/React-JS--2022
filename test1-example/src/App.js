import { useState, useEffect } from 'react';
import './App.css';

import InputBox from './components/input-box';
import UniversitiesList from './components/list-box';

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

		setCountry('');
	};

	console.log(universities);

	return (
		<div>
			<h1>Search University</h1>
			<p>Type the country</p>
			<InputBox
				className="countryInputString"
				type="text"
				placeholder="ex: Italy"
				value={country}
				onChange={countryNameImputed}
			/>
			<button className="submitButton" type="submit" onClick={submitCountryName}>
				OK
			</button>
			<UniversitiesList universities={universities} />
		</div>
	);
};

export default App;

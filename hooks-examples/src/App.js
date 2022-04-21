import { useState } from 'react';

import './App.css';

const App = () => {
	const [ counter, setCounter ] = useState(0);

	const decrementCounter = () => {
		console.log('decrement');
		setCounter((prevCounter) => prevCounter - 1);
	};

	const incrementCounter = () => {
		console.log('increment');
		setCounter((prevCounter) => prevCounter + 1);
	};

	return (
		<div>
			<button onClick={decrementCounter}>-</button>
			<h3>{counter}</h3>
			<button onClick={incrementCounter}>+</button>
		</div>
	);
};

export default App;

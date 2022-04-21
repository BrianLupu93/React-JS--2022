import { useState } from 'react';

import './App.css';

const App = () => {
	const [ inputValue, setInputValue ] = useState('');

	const onChangeEvent = (e) => {
		setInputValue(e.target.value);
	};

	return (
		<div>
			<input placeholder="type something" onChange={onChangeEvent} />
			{inputValue}
		</div>
	);
};

export default App;

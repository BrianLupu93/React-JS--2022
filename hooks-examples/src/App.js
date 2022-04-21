import { useRef, useState } from 'react';

const App = () => {
	const inputRef = useRef(null);
	const [ name, setName ] = useState('Name');

	const onClickHandle = () => {
		console.log(inputRef.current.value);
		setName(inputRef.current.value);
		inputRef.current.value = '';
		inputRef.current.focus();
	};

	return (
		<div>
			<h1>{name}</h1>
			<input type="text" placeholder="type something" ref={inputRef} />
			<button onClick={onClickHandle}>Change Name</button>
		</div>
	);
};

export default App;

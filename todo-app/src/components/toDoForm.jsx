import { useEffect, useState } from 'react';

const ToDoForm = () => {
	const [ input, setInput ] = useState('');
	const [ toDoListElement, setToDoListElement ] = useState([]);

	const getInputValue = (event) => {
		const inputValue = event.target.value;
		setInput(inputValue);
	};

	const addToDoHandle = (event) => {
		event.preventDefault();
		setToDoListElement((toDoListElement) => [ ...toDoListElement, input ]);
		setInput('');
	};

	console.log(toDoListElement);
	return (
		<form className="toDoForm">
			<ul>
				To-Do List
				{toDoListElement.map((listElement) => (
					<li className="list-element" id={toDoListElement.indexOf(listElement)}>
						{listElement} <button>edit</button>
						<button>delete</button>
					</li>
				))}
			</ul>
			<input className="toDoInput" type="text" onChange={getInputValue} value={input} placeholder="add a to-do" />
			<button className="addToDoButton" type="submit" onClick={addToDoHandle}>
				Add To-Do
			</button>
		</form>
	);
};

export default ToDoForm;

import { useState } from 'react';

import './toDoForm.css';

const ToDoForm = () => {
	const [ input, setInput ] = useState('');
	const [ toDoListElement, setToDoListElement ] = useState([]);

	const getInputValue = (event) => {
		const inputValue = event.target.value;
		setInput(inputValue);
	};

	const addToDoHandle = (event) => {
		event.preventDefault();
		if (input === '') return;
		setToDoListElement((toDoListElement) => [ ...toDoListElement, input ]);
		setInput('');
	};

	const deleteElement = (event) => {
		event.preventDefault();
		const elementToDelete = event.target.id;
		const newToDoListElement = [ ...toDoListElement ];
		newToDoListElement.splice(elementToDelete, 1);

		console.log(newToDoListElement);

		setToDoListElement(newToDoListElement);
	};

	return (
		<form className="toDoForm">
			<h1 className="app-title">WHAT ARE YOUR TASKS FOR TODAY??</h1>
			<ul>
				{toDoListElement.map((listElement) => (
					<li className="list-element" id={toDoListElement.indexOf(listElement)}>
						{listElement}
						<div className="setting-buttons">
							<button className="btn complete-list-element">COMPLETE</button>
							<button className="btn edit-list-element">EDIT</button>
							<button
								className="btn delete-list-element"
								onClick={deleteElement}
								id={toDoListElement.indexOf(listElement)}
							>
								X
							</button>
						</div>
					</li>
				))}
			</ul>
			<div className="input-field">
				{' '}
				<input
					className="toDoInput"
					type="text"
					onChange={getInputValue}
					value={input}
					placeholder="add a to-do"
				/>
				<button className="addToDoButton" type="submit" onClick={addToDoHandle}>
					Add To-Do
				</button>
			</div>
		</form>
	);
};

export default ToDoForm;

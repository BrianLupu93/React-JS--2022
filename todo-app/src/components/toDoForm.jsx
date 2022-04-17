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

		setToDoListElement(newToDoListElement);
	};

	const completeElement = (event) => {
		event.preventDefault();
		const completedElement = document.getElementById(event.target.id);
		completedElement.className = 'list-element-completed';
	};

	const editListElement = (event) => {
		event.preventDefault();
		const selectedElementIndex = event.target.id;
		const elementAtTheSelectedIndex = toDoListElement[selectedElementIndex];
		const newListElement = prompt(`EDIT THE TASK:   ${elementAtTheSelectedIndex}`);

		const newToDoListElementWithEdit = [ ...toDoListElement ];
		newToDoListElementWithEdit.splice(selectedElementIndex, 1, newListElement);
		setToDoListElement(newToDoListElementWithEdit);
	};

	return (
		<form className="toDoForm">
			<h1 className="app-title">WHAT ARE YOUR TASKS FOR TODAY??</h1>
			<ul>
				{toDoListElement.map((listElement) => (
					<li className="list-element" id={toDoListElement.indexOf(listElement)}>
						{listElement}
						<div className="setting-buttons">
							<button
								className="btn complete-list-element"
								onClick={completeElement}
								id={toDoListElement.indexOf(listElement)}
							>
								COMPLETE
							</button>
							<button
								className="btn edit-list-element"
								id={toDoListElement.indexOf(listElement)}
								onClick={editListElement}
							>
								EDIT
							</button>
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
				<input
					className="toDoInput"
					type="text"
					onChange={getInputValue}
					value={input}
					placeholder="add a to-do"
				/>
				<button className=" btn addToDoButton" type="submit" onClick={addToDoHandle}>
					Add Task
				</button>
			</div>
		</form>
	);
};

export default ToDoForm;

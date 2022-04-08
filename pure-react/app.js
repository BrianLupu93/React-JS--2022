const Person = (props) => {
	return React.createElement('div', {}, [
		React.createElement('h1', {}, props.name),
		React.createElement('p', {}, props.occupation)
	]);
};

const App = () => {
	return React.createElement('div', {}, [
		React.createElement('h1', { class: 'title' }, 'React Is rendered'),
		React.createElement(Person, { name: 'Yhua', occupation: 'instructor' }, null),
		React.createElement(Person, { name: 'Andrei', occupation: 'lead- instructor' }, null),
		React.createElement(Person, { name: 'Brian', occupation: 'teacher' }, null)
	]);
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));

import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [
				{
					name: 'Linda',
					id: '123kfh345'
				},
				{
					name: 'Frank',
					id: '123kfh346'
				},
				{
					name: 'Jacky',
					id: '123kfh347'
				},
				{
					name: 'Andrei',
					id: '123kfh348'
				},
				{
					name: 'Brian',
					id: '123kfh349'
				}
			]
		};
	}

	render() {
		return (
			<div className="App">
				{this.state.monsters.map((monster) => {
					return <h1 key={monster.id}>{monster.name}</h1>;
				})}
			</div>
		);
	}
}

export default App;

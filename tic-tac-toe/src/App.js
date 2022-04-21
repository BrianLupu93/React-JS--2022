import './App.css';
import ButtonComponent from './components/button/button-component';
import { useState } from 'react';

const App = () => {
	const [ clickCounter, setClickCounter ] = useState();

	const setCounter = (e) => {
		e.preventDefault();
		for (let i = 0; i <= 10; i++) {
			setClickCounter(i);
		}
		console.log(clickCounter);
	};

	return (
		<div className="app-framework">
			<table>
				<tr>
					<td className="1-0-0 box">
						<ButtonComponent onClick={setCounter} />
					</td>
					<td className="0-2-0 box">
						<ButtonComponent />
					</td>
					<td className="0-0-3 box">
						<ButtonComponent />
					</td>
				</tr>
				<tr>
					<td className="4-0-0 box">
						<ButtonComponent />
					</td>
					<td className="0-5-0 box">
						<ButtonComponent />
					</td>
					<td className="0-0-6 box">
						<ButtonComponent />
					</td>
				</tr>
				<tr>
					<td className="7-0-0 box">
						<ButtonComponent />
					</td>
					<td className="0-8-0 box">
						<ButtonComponent />
					</td>
					<td className="0-0-9 box">
						<ButtonComponent />
					</td>
				</tr>
			</table>
		</div>
	);
};

export default App;

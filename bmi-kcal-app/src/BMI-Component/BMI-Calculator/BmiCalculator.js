import { useState } from 'react';
import './BmiCalculator.css';

export const BmiCalculator = (props) => {
	const [ weight, setWeight ] = useState();
	const [ height, setHeight ] = useState();
	const [ bmi, setBmi ] = useState();
	const [ bmiMessage, setBmiMessage ] = useState('');

	const calculateBmiHandler = (event) => {
		event.preventDefault();
		if (!weight || !height) return;

		const bmiCalculated = Number(weight) / (Number(height) * Number(height));
		checkBmi(bmiCalculated);
		setBmi(bmiCalculated.toFixed(2));
		setWeight('');
		setHeight('');
	};
	const checkBmi = (bmi) => {
		if (bmi < 18.5) setBmiMessage('UNDERWEIGHT');

		if (bmi >= 18.5 && bmi <= 25) setBmiMessage('NORMAL');

		if (bmi > 25 && bmi <= 30) setBmiMessage('OVERWEIGHT');

		if (bmi > 30 && bmi <= 40) setBmiMessage('OBESITY');

		if (bmi > 40) setBmiMessage('MORBID OBESITY');
	};

	const inputedWeight = (event) => {
		event.preventDefault();
		setWeight(event.target.value);
	};

	const inputedHeight = (event) => {
		event.preventDefault();
		setHeight(event.target.value);
	};

	return (
		<div>
			<h2>Calculate your BMI Index NOW</h2>
			<form onSubmit={calculateBmiHandler}>
				<h4>Enter your weight (kg)</h4>
				<input onChange={inputedWeight} placeholder="Ex: 85" value={weight} />
				<h4>Enter your height (m)</h4>
				<input onChange={inputedHeight} placeholder="Ex: 1.82" value={height} />
				<br />
				<br />
				<button type="submit">Calculate BMI</button>
				<h3>
					BMI Index = {bmi} {bmiMessage}
				</h3>
			</form>
		</div>
	);
};

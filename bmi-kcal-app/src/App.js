import './App.css';
import { BmiCalculator } from './BMI-Component/BMI-Calculator/BmiCalculator';
import { BmiDescription } from './BMI-Component/BMI-Description/BmiDescription';

const App = () => {
	return (
		<div>
			<BmiDescription />
			<BmiCalculator />
		</div>
	);
};

export default App;

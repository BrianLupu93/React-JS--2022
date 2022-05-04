import './App.css';
import { BmiCalculator } from './BMI-Component/BMI-Calculator/BmiCalculator';
import { BmiDescription } from './BMI-Component/BMI-Description/BmiDescription';
import { KCalCalculator } from './KCAL-Component/KCAL-Calculator';

const App = () => {
	return (
		<div>
			<BmiDescription />
			<BmiCalculator />
			<KCalCalculator />
		</div>
	);
};

export default App;

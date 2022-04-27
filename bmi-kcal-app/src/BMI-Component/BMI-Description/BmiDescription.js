import './BmiDescription.css';

import { BmiTable } from './BMI-Table/BmiTable';

export const BmiDescription = () => {
	return (
		<div>
			<h2>What is the BMI?</h2>
			<p>
				The body mass index (BMI) is a measure that uses your height and weight to work out if your weight is
				healthy.
			</p>
			<BmiTable />
			<h2>Is BMI accurate?</h2>
			<p>
				BMI takes into account natural variations in body shape, giving a healthy weight range for a particular
				height. <br /> As well as measuring your BMI, healthcare professionals may take other factors into
				account when assessing if you're a healthy weight.<br /> Muscle is much denser than fat, so very
				muscular people, such as heavyweight boxers, weight trainers and athletes, may be a healthy weight even
				though their BMI is classed as obese.<br /> Your ethnic group can also affect your risk of some health
				conditions. For example, adults of South Asian origin may have a higher risk of some health problems,
				such as diabetes, with a BMI of 23, which is usually considered healthy.<br /> You should not use BMI as
				a measure if you're pregnant. Get advice from your midwife or GP if you're concerned about your weight.
			</p>
		</div>
	);
};

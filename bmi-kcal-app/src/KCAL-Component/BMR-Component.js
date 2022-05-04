import { useState } from 'react';

export const BMR = () => {
	const [ age, setAge ] = useState();
	const [ weight, setWeight ] = useState();
	const [ height, setHeight ] = useState();

	return (
		<div>
			<input placeholder="age" value={age || ''} />
			<input placeholder="weight" value={weight || ''} />
			<input placeholder="height" value={height || ''} />
		</div>
	);
};

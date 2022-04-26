import { useState } from 'react';
import NAMES from './data.json';

export const NameList = () => {
	const [ namesList, setNamesList ] = useState([]);

	setNamesList(NAMES);

	return (
		<div>
			{namesList.map((pers) => (
				<p key={pers.id}>
					{pers.first_name} {pers.last_name}
				</p>
			))}
		</div>
	);
};

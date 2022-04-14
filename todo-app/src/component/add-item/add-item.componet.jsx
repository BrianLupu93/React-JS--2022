import { useState } from 'react';

const AddItem = () => {
	const [ itemName, setItemName ] = useState('');

	const submitHandler = (event) => {
		const itemNameString = event.target;
		setItemName(itemNameString);
	};

	return (
		<div>
			<input type="text" value="">
				{itemName}
			</input>
			<button type="submit" onChange={submitHandler}>
				Add Item
			</button>
		</div>
	);
};

export default AddItem;

import { useState } from 'react';

export const SearchBar = () => {
	return (
		<div>
			<input type="text" placeholder="Search name" onChange={changeHandler} value={imputField} />
		</div>
	);
};

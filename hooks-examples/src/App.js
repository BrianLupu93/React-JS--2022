import Button from './components/button.component';
import { useRef } from 'react';

const App = () => {
	const buttonRef = useRef(null);

	return (
		<div>
			<button
				onClick={() => {
					buttonRef.current.alterToggle();
				}}
			>
				Button From Parent
			</button>
			<Button ref={buttonRef} />
		</div>
	);
};

export default App;

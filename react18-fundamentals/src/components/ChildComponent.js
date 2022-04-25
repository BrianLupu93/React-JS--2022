const ChildComponent = (props) => {
	return (
		<div>
			<button onClick={() => props.greetHandler('Alex')}>Greet Parent</button>
		</div>
	);
};
export default ChildComponent;

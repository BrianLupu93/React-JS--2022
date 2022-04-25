export const NameList = () => {
	const names = [ 'Bruce', 'Clark', 'Diana' ];
	return (
		<div>
			{names.map((name) => {
				return <h2 key={names.indexOf(name)}>{name}</h2>;
			})}
		</div>
	);
};

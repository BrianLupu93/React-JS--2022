const UniversitiesList = ({ universities }) => {
	return (
		<ul>
			{universities.map((unv, id) => {
				return <li key={id}>{unv.name}</li>;
			})}
		</ul>
	);
};

export default UniversitiesList;

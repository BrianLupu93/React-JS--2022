import './BmiTable.css';

export const BmiTable = () => {
	return (
		<div>
			<table className="bmi-table">
				<thead className="header bmi-table">
					<td>Classification</td>
					<td>BMI index</td>
				</thead>
				<tbody>
					<tr>
						<td>UNDERWEIGHT</td>
						<td>&lt; 18,5</td>
					</tr>
					<tr>
						<td>NORMAL</td>
						<td>18,5 - 25</td>
					</tr>
					<tr>
						<td>OVERWEIGHT</td>
						<td>25 - 30</td>
					</tr>
					<tr>
						<td>OBESITY</td>
						<td>30-40</td>
					</tr>
					<tr>
						<td>MORBID OBESITY</td>
						<td>&gt; 40</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

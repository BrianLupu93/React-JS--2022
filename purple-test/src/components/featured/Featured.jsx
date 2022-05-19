import './featured.scss';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

export const Featured = () => {
	return (
		<div className="featured">
			<div className="top">
				<h1 className="title">Total Revenue</h1>
				<MoreVertOutlinedIcon fontSize="small" />
			</div>

			<div className="bottom">
				<div className="featuredChart">
					<div>chart</div>
				</div>
			</div>
		</div>
	);
};

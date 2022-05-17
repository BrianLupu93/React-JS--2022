import './navbar.scss';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitRoundedIcon from '@mui/icons-material/FullscreenExitRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';

export const Navbar = () => {
	return (
		<div className="navbar">
			<div className="wrapper">
				<div className="search">
					<input type="text" placeholder="Search..." />
					<SearchRoundedIcon className="icon" />
				</div>

				<div className="items">
					<div className="item">
						<LanguageOutlinedIcon className="icon" />
						English
					</div>
					<div className="item">
						<DarkModeOutlinedIcon className="icon" />
					</div>
					<div className="item">
						<FullscreenExitRoundedIcon className="icon" />
					</div>
					<div className="item">
						<NotificationsNoneRoundedIcon className="icon" />
						<div className="counter">1</div>
					</div>
					<div className="item">
						<ChatBubbleOutlineRoundedIcon className="icon" />
						<div className="counter">2</div>
					</div>
					<div className="item">
						<ListOutlinedIcon className="icon" />
					</div>
					<div className="item">
						<img
							src="https://images.pexels.com/photos/11990076/pexels-photo-11990076.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
							alt=""
							className="avatar"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

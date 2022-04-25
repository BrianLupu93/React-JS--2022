const UserGreeting = () => {
	const isLoggedIn = false;
	return <div>Welcome {isLoggedIn && 'Brian'}</div>;
};

export default UserGreeting;

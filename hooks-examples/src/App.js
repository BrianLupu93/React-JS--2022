import { useState, createContext } from 'react';

import User from './components/user.component';
import Login from './components/Login.component';

export const AppContext = createContext(null);

const App = () => {
	const [ username, setUsername ] = useState('');

	return (
		<AppContext.Provider value={{ username, setUsername }}>
			<Login />
			<User />
		</AppContext.Provider>
	);
};

export default App;

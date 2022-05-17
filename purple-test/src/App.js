import { Home } from './pages/home/home';
import List from './pages/list/list';
import { Login } from './pages/login/login';
import { New } from './pages/new/new';
import { Single } from './pages/single/single';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/">
					<Route index element={<Home />} />
					<Route path="login" element={<Login />} />
					<Route path="users">
						<Route index element={<List />} />
						<Route path=":userId" element={<Single />} />
						<Route path="new" element={<New />} />
					</Route>
					<Route path="products">
						<Route index element={<List />} />
						<Route path=":productId" element={<Single />} />
						<Route path="new" element={<New />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header.jsx';
import Home from './components/Home/Home.jsx';
import Heroes from './components/Heroes/Heroes.jsx';
import Details from './components/Details/Details.jsx';
import Search from './components/Search/Search.jsx';
import Add from './components/Add/Add.jsx';
import Edit from './components/Edit/Edit.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import Logout from './components/Logout/Logout.jsx';
import NotFound from './components/NotFound/NotFound.jsx';
import Footer from './components/Footer/Footer.jsx';

import { AuthProvider } from './contexts/AuthContext.jsx';
import { RouteGuardPublic } from './guards/publicGuard.jsx';
import { RouteGuardPrivate } from './guards/privateGuard.jsx';

export default function App() {
	return (
		<AuthProvider>
			<Header />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/heroes" element={<Heroes />} />
				<Route path="/heroes/:heroId" element={<Details />} />
				<Route path="/search" element={<Search />} />
				<Route path="*" element={<NotFound />} />

				{/* PRIVATE ROUTES */}
				<Route element={<RouteGuardPrivate />}>
					<Route path="/add" element={<Add />} />
					<Route path="/heroes/:heroId/edit" element={<Edit />} />
					{/* <Route path="/profile" element={<Profile />} /> */}
					<Route path="/logout" element={<Logout />} />
				</Route>

				{/* PUBLIC ROUTES */}
				<Route element={<RouteGuardPublic />}>
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
				</Route> 

			</Routes>

			<Footer />
		</AuthProvider>
	);
}

import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';

import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import NotFound from './components/NotFound/NotFound.jsx';

export default function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				{/* <Route path="/heroes" element={<Heroes />} /> */}
				{/* <Route path="/heroes/:heroId" element={<Details />} /> */}
				{/* <Route path="/search" element={<Search />} /> */}
				{/* <Route path="/add" element={<Add />} /> */}
				{/* <Route path="/profile" element={<Profile />} /> */}
				<Route path="/login" element={<Login />} />
				{/* <Route path="/register" element={<Register />} /> */}
				{/* <Route path="/logout" element={<Logout />} /> */}
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</>
	);
}

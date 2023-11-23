/* eslint-disable react/prop-types */
import { Navigate, Outlet } from 'react-router-dom';

import { useAuthContext } from '../hooks/useAuthContext.js';

export const RouteGuardPublic = ({ children }) => {
	const { isLoggedIn } = useAuthContext();

	if (isLoggedIn) {
		return <Navigate to="/heroes" replace />;
	}

	return children ? children : <Outlet />;
};

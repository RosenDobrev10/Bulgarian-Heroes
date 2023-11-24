import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import useAuthContext from '../../hooks/useAuthContext.js';
import { logout } from '../../core/api/userApi.js';

export default function Logout() {
	const navigate = useNavigate();
	const { logoutHandler } = useAuthContext();

	useEffect(() => {
		logout()
			.then(() => logoutHandler())
			.catch(() => navigate('/'));
	}, [logoutHandler, navigate]);

	return null;
}

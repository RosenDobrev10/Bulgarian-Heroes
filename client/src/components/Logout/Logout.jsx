import { useEffect } from 'react';
import { logout } from '../../core/api/userApi.js';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext.js';

export default function Logout() {
	const navigate = useNavigate();
	const { logoutHandler } = useAuthContext();

	useEffect(() => {
		logout()
			.then(() => logoutHandler())
			.catch(() => navigate('/'));
	}, []);

	return null;
}

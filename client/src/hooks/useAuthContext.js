import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext.jsx';

export default function useAuthContext(){
	const context = useContext(AuthContext);
	return context;
}

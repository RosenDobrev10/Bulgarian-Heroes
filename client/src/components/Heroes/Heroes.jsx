import { useEffect } from 'react';
import Spinner from '../Spinner/Spinner.jsx';

export default function Heroes() {
	useEffect(() => {
		document.title = 'Heroes';
	}, []);

	return <Spinner />;
}

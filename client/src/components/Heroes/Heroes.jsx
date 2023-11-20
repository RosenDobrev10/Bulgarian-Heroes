import { useEffect, useState } from 'react';
import Spinner from '../Spinner/Spinner.jsx';
import { getAllHeroes } from '../../core/api/heroesApi.js';

export default function Heroes() {
	const [heroes, setHeroes] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		document.title = 'Герои';
		getAllHeroes()
			.then((heroes) => setHeroes(heroes))
			.catch((err) => console.error(err))
			.finally(() => setIsLoading(false));
	}, []);

	return (
		<>
			{isLoading && <Spinner />}
			{heroes}
		</>
	);
}

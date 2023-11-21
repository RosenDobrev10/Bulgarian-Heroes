import { useEffect, useState } from 'react';

import { getAllHeroes } from '../../core/api/heroesApi.js';

import Spinner from '../Spinner/Spinner.jsx';
import Hero from './Hero/Hero.jsx';

import { Animate, initTE } from 'tw-elements';

initTE({ Animate });

export default function Heroes() {
	const [heroes, setHeroes] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		document.title = 'Герои';
		getAllHeroes()
			.then((data) => setHeroes(data))
			.catch((err) => console.error(err))
			.finally(() => setIsLoading(false));
	}, []);

	return (
		<>
			{isLoading && <Spinner />}
			<ul className="flex flex-wrap justify-around my-3">
				{heroes.map((hero) => (
					<li key={hero._id} className="w-1/3 h-auto">
						<Hero {...hero} />
					</li>
				))}
			</ul>
		</>
	);
}

import { useEffect, useState } from 'react';

import { getAllHeroes } from '../../core/api/heroesApi.js';

import Spinner from '../Spinner/Spinner.jsx';
import Hero from './Hero/Hero.jsx';

import { Animate, initTE } from 'tw-elements';
import Message from '../Message/Message.jsx';
initTE({ Animate });

export default function Heroes() {
	const [heroes, setHeroes] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [errorMessage, setErrorMessage] = useState('');

	useEffect(() => {
		document.title = 'Герои';
		getAllHeroes()
			.then((data) => setHeroes(data))
			.catch((error) => setErrorMessage(error.message))
			.finally(() => setIsLoading(false));
	}, []);

	return (
		<>
			{isLoading && <Spinner />}

			{errorMessage && <Message errorMessage={errorMessage} />}
			
			<ul className="flex gap-10 flex-wrap justify-between m-5">
				{heroes.map((hero) => (
					<li key={hero._id} className="w-5/12 h-auto">
						<Hero {...hero} />
					</li>
				))}
			</ul>
		</>
	);
}

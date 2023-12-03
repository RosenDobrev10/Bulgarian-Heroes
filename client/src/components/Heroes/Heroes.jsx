import { useEffect, useState } from 'react';
import { Animate, initTE } from 'tw-elements';
initTE({ Animate });

import { getAllHeroes } from '../../core/api/heroesApi.js';

import Hero from './Hero/Hero.jsx';
import Spinner from '../Spinner/Spinner.jsx';
import Message from '../Message/Message.jsx';
import NoResults from '../NoResults/NoResults.jsx';

export default function Heroes() {
	const [heroes, setHeroes] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [hasResult, setHasResult] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	useEffect(() => {
		document.title = 'Герои';
		getAllHeroes()
			.then((data) => {
				setHeroes(data);
				setHasResult(true);
			})
			.catch((error) => setErrorMessage(error.message))
			.finally(() => setIsLoading(false));
	}, []);

	return (
		<>
			{isLoading && <Spinner />}

			{errorMessage && <Message errorMessage={errorMessage} />}
			
			{hasResult && heroes.length > 0 && (
				<ul className="flex gap-10 flex-wrap justify-between m-5">
				{heroes.map((hero) => (
					<li key={hero._id} className="w-5/12 h-auto">
						<Hero {...hero} />
					</li>
				))}
			</ul>
			)}

			{hasResult && heroes.length === 0 && <NoResults text={'Няма добавени герои.'} buttonText={'Добави'}/>}
		</>
	);
}

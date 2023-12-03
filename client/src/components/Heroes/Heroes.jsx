import { useEffect, useState } from 'react';
import { Animate, initTE } from 'tw-elements';
initTE({ Animate });

import { getAllHeroes } from '../../core/api/heroesApi.js';

import Spinner from '../Spinner/Spinner.jsx';
import Message from '../Message/Message.jsx';
import NoResults from '../NoResults/NoResults.jsx';
import HeroList from '../HeroList/HeroList.jsx';

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
			
			{hasResult && heroes.length > 0 && <HeroList heroes={heroes}/>}

			{hasResult && heroes.length === 0 && <NoResults text={'Няма добавени герои.'} buttonText={'Добави'}/>}
		</>
	);
}

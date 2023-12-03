import { useEffect, useState } from 'react';
import { Animate, initTE } from 'tw-elements';
initTE({ Animate });

import { getMyHeroes } from '../../core/api/heroesApi.js';
import useAuthContext from '../../hooks/useAuthContext.js';

import Hero from '../Heroes/Hero/Hero.jsx';
import Spinner from '../Spinner/Spinner.jsx';
import Message from '../Message/Message.jsx';
import NoResults from '../NoResults/NoResults.jsx';

export default function Profile() {
	const [myHeroes, setMyHeroes] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [hasResult, setHasResult] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
    const { getUserId } = useAuthContext();

	useEffect(() => {
		document.title = 'Моите герои';
		getMyHeroes(getUserId)
			.then((data) => {
				setMyHeroes(data);
				setHasResult(true);
			})
			.catch((error) => setErrorMessage(error.message))
			.finally(() => setIsLoading(false));
	}, [getUserId]);

	return (
		<>
			{isLoading && <Spinner />}

			{errorMessage && <Message errorMessage={errorMessage} />}
			
			{hasResult && myHeroes.length > 0 && (
				<ul className="flex gap-10 flex-wrap justify-between m-5">
				{myHeroes.map((hero) => (
					<li key={hero._id} className="w-5/12 h-auto">
						<Hero {...hero} />
					</li>
				))}
			</ul>
			)}

			{hasResult && myHeroes.length === 0 && <NoResults text={'Нямате добавени герои.'} buttonText={'Добави'}/>}
		</>
	);
}

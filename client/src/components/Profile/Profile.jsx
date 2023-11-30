import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { Animate, initTE } from 'tw-elements';
initTE({ Animate });
import styles from './Profile.module.css'

import { getMyHeroes } from '../../core/api/heroesApi.js';
import useAuthContext from '../../hooks/useAuthContext.js';

import Hero from '../Heroes/Hero/Hero.jsx';
import Spinner from '../Spinner/Spinner.jsx';
import Message from '../Message/Message.jsx';

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

			{hasResult && myHeroes.length === 0 && (
				<div className={styles.waviy}>
					<span style={{"--i":1}} className={styles.waviySpan}>Н</span>
					<span style={{"--i":2}} className={styles.waviySpan}>я</span>
					<span style={{"--i":3}} className={styles.waviySpan}>м</span>
					<span style={{"--i":4}} className={styles.waviySpan}>а</span>
					<span style={{"--i":4}} className={styles.waviySpan}>т</span>
					<span style={{"--i":4}} className={styles.waviySpan}>е</span>
					<span style={{"--i":5}} className={styles.waviySpan}>&nbsp;</span>
					<span style={{"--i":5}} className={styles.waviySpan}>Д</span>
					<span style={{"--i":6}} className={styles.waviySpan}>о</span>
					<span style={{"--i":7}} className={styles.waviySpan}>б</span>
					<span style={{"--i":9}} className={styles.waviySpan}>а</span>
					<span style={{"--i":10}} className={styles.waviySpan}>в</span>
					<span style={{"--i":11}} className={styles.waviySpan}>е</span>
					<span style={{"--i":12}} className={styles.waviySpan}>н</span>
					<span style={{"--i":13}} className={styles.waviySpan}>и</span>
					<span style={{"--i":14}} className={styles.waviySpan}>&nbsp;</span>
					<span style={{"--i":15}} className={styles.waviySpan}>г</span>
					<span style={{"--i":16}} className={styles.waviySpan}>е</span>
					<span style={{"--i":17}} className={styles.waviySpan}>р</span>
					<span style={{"--i":18}} className={styles.waviySpan}>о</span>
					<span style={{"--i":19}} className={styles.waviySpan}>и</span>
					<span style={{"--i":20}} className={styles.waviySpan}>.</span>
					<Link 
					to='/add' 
					className=" bg-green-500 shadow-2xl hover:bg-gradient-to-b ml-5 from-white via-green-500 to-red-500 hover:text-white text-white font-semibold px-10 py-3 rounded-md mr-6"
					>
					Добави
					</Link>
				</div>
			)}
		</>
	);
}

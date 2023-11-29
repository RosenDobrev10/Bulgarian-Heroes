import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './Search.module.css'

import { Ripple, initTE } from 'tw-elements';
initTE({ Ripple });

import useForm from '../../hooks/useForm.js';
import { searchHero } from '../../core/api/heroesApi.js';

import Spinner from '../Spinner/Spinner.jsx';
import Message from '../Message/Message.jsx';
import Hero from '../Heroes/Hero/Hero.jsx';

export default function Search() {
	const [foundHeroes, setFoundHeroes] = useState([]);
	const [hasSearch, setHasSearch] = useState(false);
	const [searchParams, setSearchParams] = useSearchParams();

	useEffect(() => {
		document.title = 'Търси';
		if (searchParams.get('name')) {
			searchHandler();
		}
	}, []);
	
	async function searchHandler(){
		const result = await searchHero(formValues.search || searchParams.get('name'));
		setFoundHeroes(result);
		setSearchParams({name: formValues.search});
		setHasSearch(true);	
	}

	const { formValues, serverErrorMessage, isLoading, onChange, onSubmit } = useForm(searchHandler, { search: ''});

	return (
		<div className="mb-3 h-full">

			{isLoading && <Spinner/>}

			{!isLoading && serverErrorMessage && <Message serverErrorMessage={serverErrorMessage} />}

			<form className="relative mb-4 flex justify-center self-start flex-wrap" onSubmit={onSubmit}>
				<input
					type="search"
					className="relative block min-w-0 rounded-md border-2 border-solid border-green-500 bg-green-500 bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-white outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-green-500 focus:text-white focus:shadow-2xl focus:outline-none placeholder:text-white"
					placeholder="Търси"
					name='search'
					aria-label="Search"
					aria-describedby="button-addon3"
					onChange={onChange}
					value={formValues.search}
				/>
				<button
					className="ml-1 relative z-[2] rounded-md bg-red-500 border-2 border-red-500 px-6 py-2 text-xs font-medium uppercase text-white transition duration-150 ease-in-out hover:bg-opacity-80 focus:outline-none focus:ring-0"
					id="button-addon3"
					data-te-ripple-init
				>
					Търси
				</button>
			</form>

			{hasSearch && foundHeroes.length > 0 && (
				<ul className="flex gap-10 flex-wrap justify-between m-5">
				{foundHeroes.map((hero) => (
					<li key={hero._id} className="w-5/12 h-auto">
						<Hero {...hero} />
					</li>
				))}
			</ul>
			)}
			
			{!serverErrorMessage && hasSearch && foundHeroes.length === 0 && (
			<div className={styles.waviy}>
				<span style={{"--i":1}} className={styles.waviySpan}>Н</span>
				<span style={{"--i":2}} className={styles.waviySpan}>я</span>
				<span style={{"--i":3}} className={styles.waviySpan}>м</span>
				<span style={{"--i":4}} className={styles.waviySpan}>а</span>
				<span style={{"--i":5}} className={styles.waviySpan}>&nbsp;</span>
				<span style={{"--i":5}} className={styles.waviySpan}>Н</span>
				<span style={{"--i":6}} className={styles.waviySpan}>а</span>
				<span style={{"--i":7}} className={styles.waviySpan}>м</span>
				<span style={{"--i":9}} className={styles.waviySpan}>е</span>
				<span style={{"--i":10}} className={styles.waviySpan}>р</span>
				<span style={{"--i":11}} className={styles.waviySpan}>е</span>
				<span style={{"--i":12}} className={styles.waviySpan}>н</span>
				<span style={{"--i":13}} className={styles.waviySpan}>и</span>
				<span style={{"--i":14}} className={styles.waviySpan}>&nbsp;</span>
				<span style={{"--i":15}} className={styles.waviySpan}>р</span>
				<span style={{"--i":16}} className={styles.waviySpan}>е</span>
				<span style={{"--i":17}} className={styles.waviySpan}>з</span>
				<span style={{"--i":18}} className={styles.waviySpan}>у</span>
				<span style={{"--i":19}} className={styles.waviySpan}>л</span>
				<span style={{"--i":20}} className={styles.waviySpan}>т</span>
				<span style={{"--i":21}} className={styles.waviySpan}>а</span>
				<span style={{"--i":22}} className={styles.waviySpan}>т</span>
				<span style={{"--i":23}} className={styles.waviySpan}>и</span>
				<span style={{"--i":24}} className={styles.waviySpan}>.</span>
			</div>
			)}

		</div>
	);
}

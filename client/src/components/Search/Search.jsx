import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Ripple, initTE } from 'tw-elements';
initTE({ Ripple });

import useForm from '../../hooks/useForm.js';
import { searchHero } from '../../core/api/heroesApi.js';

import HeroList from '../HeroList/HeroList.jsx';
import NoResults from '../NoResults/NoResults.jsx';
import Spinner from '../Spinner/Spinner.jsx';
import Message from '../Message/Message.jsx';

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

			{serverErrorMessage && <Message serverErrorMessage={serverErrorMessage} />}

			<form className="relative my-4 flex justify-center self-start flex-wrap" onSubmit={onSubmit}>
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

			{hasSearch && foundHeroes.length > 0 && <HeroList heroes={foundHeroes}/>}
			
			{hasSearch && foundHeroes.length === 0 && <NoResults text={'Няма намерени резултати.'}/>}

		</div>
	);
}

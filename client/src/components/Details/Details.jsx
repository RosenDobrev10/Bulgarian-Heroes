import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { getHeroById } from '../../core/api/heroesApi.js';
import formatDateToTimeAgo from '../../util/formatDateToTimeAgo.js';

import Spinner from '../Spinner/Spinner.jsx';
import { useAuthContext } from '../../hooks/useAuthContext.js';

export default function Details() {
	const [hero, setHero] = useState({});
	const [isOwner, setIsOwner] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const { heroId } = useParams();
	const { getUserId, isLoggedIn } = useAuthContext();

	useEffect(() => {
		getHeroById(heroId)
			.then((heroData) => {
				setHero(heroData);
				setIsOwner(getUserId === heroData._ownerId);
				document.title = heroData.name;
			})
			.catch((err) => console.error(err))
			.finally(() => setIsLoading(false));
	}, [heroId, getUserId]);

	return (
		<>
			{isLoading && <Spinner />}
			<div className="flex flex-col rounded-lg m-10 bg-green-500 shadow-2xl dark:bg-neutral-700 md:flex-row">
				<img
					className="aspect-video h-screen w-2/3 object-fill rounded-t-lg md:h-auto md:!rounded-none md:!rounded-l-lg"
					src={hero.imageUrl}
					alt={hero.name}
				/>
				<div className="flex flex-col justify-start p-6">
					<h2 className="mb-4 text-3xl font-medium text-white">
						{hero.name}
					</h2>
					<p className="mb-4 text-base text-white ">
						{hero.description}
					</p>
					<p className="mb-4 text-base text-white ">
						Роден през {hero.born} в {hero.birthplace}.
					</p>
					<p className="mb-4 text-base text-white ">
						Основна дейност като {hero.occupation}.
					</p>
					<p className="mb-4 text-base text-white ">
						Добавен преди {formatDateToTimeAgo(hero._createdOn)}.
					</p>
					{isLoggedIn &&
						(isOwner ? (
							<>
								<div className="hover:drop-shadow-lg hover:opacity-80 bg-red-500 w-72 lg:w-5/6 m-auto mt-6 p-2 rounded-2xl  text-white text-center shadow-xl">
									<Link className="lg:text-sm text-lg font-bold">
										Изтрий
									</Link>
								</div>
								<div className="hover:drop-shadow-lg hover:opacity-80 bg-yellow-500 w-72 lg:w-5/6 m-auto mt-6 p-2 rounded-2xl text-center text-white shadow-xl">
									<Link className="lg:text-sm text-lg font-bold">
										Промени
									</Link>
								</div>
							</>
						) : (
							<>
								<div className="hover:drop-shadow-lg hover:opacity-80 bg-blue-500 w-72 lg:w-5/6 m-auto mt-6 p-2 rounded-2xl  text-white text-center shadow-xl">
									<Link className="lg:text-sm text-lg font-bold">
										Харесай
									</Link>
								</div>
							</>
						))}
				</div>
			</div>
		</>
	);
}

import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import useAuthContext from '../../hooks/useAuthContext.js';
import { canLike, getHeroById, likesForHero} from '../../core/api/heroesApi.js';
import formatDateToTimeAgo from '../../util/formatDateToTimeAgo.js';

import Delete from '../Heroes/Delete/Delete.jsx';
import Like from '../Heroes/Like/Like.jsx';
import Spinner from '../Spinner/Spinner.jsx';
import Message from '../Message/Message.jsx';

export default function Details() {
	const [hero, setHero] = useState({});
	const [isOwner, setIsOwner] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [errorMessage, setErrorMessage] = useState('');
	const [showDeleteModal, setShowDeleteModal] = useState(false);
	const [showLikeModal, setShowLikeModal] = useState(false);
	const { heroId } = useParams();
	const { getUserId, isLoggedIn } = useAuthContext();

	useEffect(() => {
		getHeroById(heroId)
			.then((heroData) => {
				setHero(heroData);
				setIsOwner(getUserId === heroData._ownerId);
				document.title = heroData.name;
			})
			.catch((error) => setErrorMessage(error.message))
			.finally(() => setIsLoading(false));

		likesForHero(heroId)
			.then((likes) => {
				setHero((state) => ({ ...state, likes }));
			})
			.catch((error) => setErrorMessage(error.message))
			.finally(() => setIsLoading(false));

			canLike(heroId, getUserId)
			.then((isLiked) => {
				setHero((state) => ({ ...state, isLiked }));
			})
			.catch((error) => setErrorMessage(error.message))
			.finally(() => setIsLoading(false));

		// Promise.all([
		// 	getHeroById(heroId),
		// 	likesForHero(heroId),
		// 	canLike(heroId, getUserId)
		// ])
		// 	.then(([heroData, likes, isLiked]) => {
		// 		setHero({ ...heroData, likes, isLiked });
		// 		setIsOwner(getUserId === heroData._ownerId);
		// 		document.title = heroData.name;
		// 	})
		// 	.catch((error) => setErrorMessage(error.message))
		// 	.finally(() => setIsLoading(false));
	}, [heroId, getUserId]);

	function toggleDeleteModal() {
		setShowDeleteModal(!showDeleteModal);
	}

	function toggleLikeModal() {
		setShowLikeModal(!showLikeModal);
	}

	function onAddLike() {
		setHero((state) => ({ ...state, likes: state.likes + 1, isLiked: state.isLiked + 1 }));
	}

	return (
		<>
			{isLoading && <Spinner />}

			{errorMessage && <Message errorMessage={errorMessage} />}

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
					<p className="mb-4 text-base text-white">
						{hero.description}
					</p>
					<p className="mb-4 text-base text-white">
						Роден през {hero.born} в {hero.birthplace}.
					</p>
					<p className="mb-4 text-base text-white">
						Основна дейност: {hero.occupation}.
					</p>
					<div className="flex justify-between items-center">
						<p className="mb-4 text-base text-white ">
							Добавен преди {formatDateToTimeAgo(hero._createdOn)}.
						</p>
						<p className="mb-4 text-base text-white ">
							Харесвания: {hero.likes}
						</p>
					</div>
					{isLoggedIn &&
						(isOwner ? (
							<>
								<div className="hover:drop-shadow-lg hover:opacity-80 bg-red-500 w-72 lg:w-5/6 m-auto mt-6 p-2 rounded-2xl  text-white text-center shadow-xl">
									<button
										className="lg:text-sm text-lg font-bold"
										onClick={toggleDeleteModal}
									>
										Изтрий
									</button>
								</div>
								<div className="hover:drop-shadow-lg hover:opacity-80 bg-yellow-500 w-72 lg:w-5/6 m-auto mt-6 p-2 rounded-2xl text-center text-white shadow-xl">
									<Link to={`/heroes/${hero._id}/edit`} className="lg:text-sm text-lg font-bold">
										Промени
									</Link>
								</div>
							</>
						) : (
							<>
								{hero.isLiked === 0 && (
									<div className="hover:drop-shadow-lg hover:opacity-80 bg-blue-500 w-72 lg:w-5/6 m-auto mt-6 p-2 rounded-2xl  text-white text-center shadow-xl">
										<button
											className="lg:text-sm text-lg font-bold"
											onClick={toggleLikeModal}
										>
											Харесай
										</button>
									</div>
								)}
							</>
						))}
				</div>
			</div>

			{showDeleteModal && <Delete toggleDeleteModal={toggleDeleteModal} {...hero} />}

			{showLikeModal && <Like toggleLikeModal={toggleLikeModal} onAddLike={onAddLike} {...hero} />}
		</>
	);
}

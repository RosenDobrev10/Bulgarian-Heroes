import { useState, useEffect, useReducer } from 'react';
import { Link, useParams } from 'react-router-dom';

import useAuthContext from '../../hooks/useAuthContext.js';
import { canLike, getHeroById, likesForHero} from '../../core/api/heroesApi.js';
import { createComment, getAllCommentsForHero} from '../../core/api/commentsApi.js';
import formatDateToTimeAgo from '../../util/formatDateToTimeAgo.js';
import commentReducer from '../Comment/commentReducer.js';

import Delete from '../Heroes/Delete/Delete.jsx';
import Like from '../Heroes/Like/Like.jsx';
import Spinner from '../Spinner/Spinner.jsx';
import Message from '../Message/Message.jsx';
import Comment from '../Comment/Comment.jsx';
import AddComment from '../AddComment/AddComment.jsx';

export default function Details() {
	const [hero, setHero] = useState({});
	const [heroLikes, setHeroLikes] = useState(0);
	const [heroCanLike, setHeroCanLike] = useState(true);
	const [isOwner, setIsOwner] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [errorMessage, setErrorMessage] = useState('');
	const [showDeleteModal, setShowDeleteModal] = useState(false);
	const [showLikeModal, setShowLikeModal] = useState(false);

    const [comments, dispatch] = useReducer(commentReducer, []);
	const { heroId } = useParams();
	const { getUserId, isLoggedIn, getUserEmail } = useAuthContext();

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
			.then((likes) => setHeroLikes(likes))
			.catch((error) => setErrorMessage(error.message))
			.finally(() => setIsLoading(false));

		canLike(heroId, getUserId)
			.then((canLike) => setHeroCanLike(canLike === 0))
			.catch((error) => setErrorMessage(error.message))
			.finally(() => setIsLoading(false));

		getAllCommentsForHero(heroId)
			.then((commentsForHero) => {
				dispatch({
					type: 'GET_ALL_COMMENTS_FOR_HERO',
					payload: commentsForHero,
				});
			});
	}, [heroId, getUserId]);

	function toggleDeleteModal() {
		setShowDeleteModal(!showDeleteModal);
	}

	function toggleLikeModal() {
		setShowLikeModal(!showLikeModal);
	}

	function onAddLike() {
		setHeroLikes((state) => (state + 1));
		setHeroCanLike(false);
	}

	async function addCommentHandler(formValues) {
		const newComment = await createComment(heroId, formValues.comment);
		newComment.owner = { email: getUserEmail };

		dispatch({
			type: 'ADD_COMMENT',
			payload: newComment,
		});
	}

	async function deleteCommentHandler(comment) {

		dispatch({
			type: 'DELETE_COMMENT',
			payload: comment,
		});
	}

	async function editCommentHandler(editedComment) {
		editedComment.owner = { email: getUserEmail };

		dispatch({
			type: 'EDIT_COMMENT',
			payload: editedComment,
		});
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
				<div className="flex flex-col flex-1 justify-start p-6">
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
							Харесвания: {heroLikes}
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
								{heroCanLike ? (
									<div className="hover:drop-shadow-lg hover:opacity-80 bg-blue-500 w-72 lg:w-5/6 m-auto mt-6 p-2 rounded-2xl  text-white text-center shadow-xl">
										<button
											className="lg:text-sm text-lg font-bold"
											onClick={toggleLikeModal}
										>
											Харесай
										</button>
									</div>
								) : (<div className="hover:drop-shadow-lg hover:opacity-80 bg-blue-500 w-72 lg:w-5/6 m-auto mt-6 p-2 rounded-2xl  text-white text-center shadow-xl">
										<button
											disabled
											className="cursor-not-allowed lg:text-sm text-lg font-bold"
										>
											Вече сте харесали
										</button>
							</div>)}
							</>
						))}
				</div>
			</div>
			
			<div className='flex justify-between mt-0 m-10 bg-green-500 p-5 rounded-lg shadow-2xl'>

				<div className='flex flex-col mt-3 basis-1/2 items-center'>				
					<h2 className="mb-4 text-3xl font-medium text-white text-center">Коментари</h2>
					<Comment comments={comments} deleteCommentHandler={deleteCommentHandler} editCommentHandler={editCommentHandler} heroId={heroId}/>
				</div>

				{isLoggedIn && (
				<div className='flex flex-col mt-3 basis-1/2 items-center'>				
					<h2 className="mb-4 text-3xl font-medium text-white text-center">Добави коментар</h2>
					<AddComment heroId={heroId} addCommentHandler={addCommentHandler}/>
				</div>
				)}

			</div>			

			{showDeleteModal && <Delete toggleDeleteModal={toggleDeleteModal} {...hero} />}

			{showLikeModal && <Like toggleLikeModal={toggleLikeModal} onAddLike={onAddLike} {...hero} />}
		</>
	);
}

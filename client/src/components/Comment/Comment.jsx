/* eslint-disable react/prop-types */

import { useState } from 'react';
import formatDateToTimeAgo from '../../util/formatDateToTimeAgo.js';
import useAuthContext from '../../hooks/useAuthContext.js';

import NoResults from '../NoResults/NoResults.jsx';
import DeleteComment from './DeleteComment/DeleteComment.jsx';
import EditComment from './EditComment/EditComment.jsx';

export default function Comment({ comments, deleteCommentHandler, editCommentHandler, heroId }) {
	const [showDeleteModal, setShowDeleteModal] = useState(false);
	const [showEditModal, setShowEditModal] = useState(false);
	const [commentDetails, setCommentDetails] = useState({});
	const { getUserId } = useAuthContext();

	function toggleDeleteModal() {
		setShowDeleteModal(!showDeleteModal);
	}

	function deleteClickHandler(comment){
		toggleDeleteModal();
		setCommentDetails(comment)
	}

	function toggleEditModal() {
		setShowEditModal(!showEditModal);
	}

	function editClickHandler(comment){
		toggleEditModal();
		setCommentDetails(comment)
	}

	return (
		<>
			{comments.map((comment) => (
				<div
					key={comment._id}
					className="w-full flex flex-col gap-4 p-4 mb-8 rounded-lg bg-white"
				>
					<div className="flex flex-col">
						<p className="text-3xl font-medium whitespace-nowrap truncate overflow-hidden">
							{comment?.owner.email}
						</p>
						<p className="text-gray-400 text-base mb-4">
							Добавен преди {formatDateToTimeAgo(comment._createdOn)}.
						</p>
					</div>
					<p className="-mt-4">{comment.comment}</p>
					{comment._ownerId === getUserId && (
					<div className="flex justify-between flex-wrap">
						<div className="hover:drop-shadow-lg hover:opacity-80 bg-red-500 w-72 m-auto mt-6 p-2 rounded-2xl text-white text-center shadow-xl">
							<button
								className="lg:text-sm text-lg font-bold"
								onClick={() => deleteClickHandler(comment)}
							>
								Изтрий
							</button>
						</div>
						<div className="hover:drop-shadow-lg hover:opacity-80 bg-yellow-500 w-72 m-auto mt-6 p-2 rounded-2xl text-center text-white shadow-xl">
							<button 
								className="lg:text-sm text-lg font-bold"
								onClick={() => editClickHandler(comment)}
							>
								Промени
							</button>
						</div>
					</div>
					)}
				</div>
			))}

			{showDeleteModal && 
			<DeleteComment 
			toggleDeleteModal={toggleDeleteModal} 
			comment={commentDetails} 
			deleteCommentHandler={deleteCommentHandler}
			/>}

			{showEditModal && 
			<EditComment 
			toggleEditModal={toggleEditModal} 
			comment={commentDetails} 
			editCommentHandler={editCommentHandler} 
			heroId={heroId}
			/>}

			{comments.length === 0 && <NoResults text={'Няма добавени коментари.'} textColor={'white'}/>}
		</>
	);
}

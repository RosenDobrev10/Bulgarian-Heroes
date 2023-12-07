/* eslint-disable react/prop-types */

import { useState } from 'react';

import { likeHero } from '../../../core/api/heroesApi.js';

import Spinner from '../../Spinner/Spinner.jsx';
import Message from '../../Message/Message.jsx';

export default function Like({ toggleLikeModal, onAddLike, name, _id }) {
	const [isLoading, setIsLoading] = useState(true);
	const [errorMessage, setErrorMessage] = useState('');

	function onLikeHandler() {
		likeHero(_id)
			.then(() => {
				onAddLike();
				toggleLikeModal();
			})
			.catch((error) => setErrorMessage(error.message))
			.finally(() => setIsLoading(false));
	}

	return (
		<div
			className="min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover bg-gradient-to-b from-white via-green-500 to-red-500"
			id="modal-id"
		>
			{isLoading && <Spinner />}

			{errorMessage && <Message errorMessage={errorMessage} />}

			<div className="absolute bg-black opacity-80 inset-0 z-0" />
			<div className="w-full max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-white ">
				{/* CONTENT */}
				<div className="">
					{/* BODY */}
					<div className="text-center p-5 flex-auto justify-center">
						<svg 
							xmlns="http://www.w3.org/2000/svg" 
							className="w-16 h-16 flex items-center text-blue-500 mx-auto"
							viewBox="0 0 20 20" 
							fill="currentColor"  
						>
							<path 
								fillRule="evenodd"
								d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
								clipRule="evenodd" 
							/>
					</svg>
						<h2 className="text-xl font-bold py-4">
							Потвърдете харесването.
						</h2>
						<p className="text-sm text-gray-500 px-8">
							Наистина ли желаете да харесате <span className='font-bold'>{name}</span> ?
						</p>
					</div>
					{/* FOOTER */}
					<div className="p-3  mt-2 text-center space-x-4 md:block">
						<button
							onClick={toggleLikeModal}
							className="mb-2 md:mb-0 bg-green-500 px-5 py-2 text-sm text-white shadow-sm font-medium tracking-wider border rounded-full hover:shadow-lg hover:opacity-80"
						>
							Откажи
						</button>
						<button
							onClick={onLikeHandler}
							className="mb-2 md:mb-0 bg-blue-500 border border-blue-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:opacity-80    "
						>
							Харесай
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

/* eslint-disable react/prop-types */

import formatDateToTimeAgo from '../../util/formatDateToTimeAgo.js';
import NoResults from '../NoResults/NoResults.jsx';

export default function Comment({ comments }) {
	return (
		<>
			{comments.map((comment) => (
				<div
					key={comment._id}
					className="w-full flex flex-col gap-4 p-4 mb-8 rounded-lg bg-white"
				>
					<div className="flex flex-col">
						<p className="text-xl whitespace-nowrap truncate overflow-hidden">
							{comment?.owner.email}
						</p>
						<p className="text-gray-400 text-sm mb-4">
							Добавен преди {formatDateToTimeAgo(comment._createdOn)}.
						</p>
					</div>
					<p className="-mt-4 text-gray-500">{comment.comment}</p>
				</div>
			))}

            {comments.length === 0 && <NoResults text={'Няма добавени коментари.'} textColor={'white'}/>}
		</>
	);
}

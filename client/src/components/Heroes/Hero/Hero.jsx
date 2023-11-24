/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import styles from './Hero.module.css'

import { Ripple, initTE } from 'tw-elements';
initTE({ Ripple });

import formatDateToTimeAgo from '../../../util/formatDateToTimeAgo.js';

export default function Hero({ _id, name, imageUrl, description, _createdOn}) {
	return (
		<>
			<div className="block rounded-lg bg-green-500 shadow-2xl">
				<div
					className="relative overflow-hidden bg-cover bg-no-repeat"
					data-te-ripple-init
					data-te-ripple-color="light"
				>
					<img
						className="rounded-t-lg aspect-video w-full h-full"
						src={imageUrl}
						alt={name}
					/>
					<a href="#!">
						<div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100" />
					</a>
				</div>
				<div className="p-6">
					<h5 className="mb-2 text-xl font-medium leading-tight text-white">
						{name}
					</h5>
					<p className={`${styles.rowLength} mb-4 text-base text-white overflow-ellipsis`}>{description}</p>
					<div className='flex justify-between'>
						<p className="mb-4 text-base text-white">
						Добавен преди {formatDateToTimeAgo(_createdOn)}
						</p>
						<Link
							to={`/heroes/${_id}`}
							className="px-6 py-2 bg-red-500 text-white text-base font-bold uppercase rounded"
						>
							Научи още ...
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}

import { useEffect, useState } from 'react';
import { getAllHeroes } from '../../core/api/heroesApi.js';
import Spinner from '../Spinner/Spinner.jsx';
import Hero from './Hero/Hero.jsx';

export default function Heroes() {
	const [heroes, setHeroes] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		document.title = 'Герои';
		getAllHeroes()
			.then((data) => setHeroes(data))
			.catch((err) => console.error(err))
			.finally(() => setIsLoading(false));
	}, []);

	return (
		<>
			{isLoading && <Spinner />}
			<section className="text-neutral-700 dark:text-neutral-300">
				<div className="mx-auto text-center md:max-w-xl lg:max-w-3xl">
					<h3 className="mb-6 text-3xl font-bold">Testimonials</h3>
					<p className="mb-6 pb-2 md:mb-12 md:pb-0">
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Fugit, error amet numquam iure provident voluptate
						esse quasi, veritatis totam voluptas nostrum quisquam
						eum porro a pariatur veniam.
					</p>
				</div>
				{heroes.map((hero) => (
					<Hero key={hero._id} {...hero} />
				))}
				{/*First Testimonial*/}
				<div className="grid gap-6 text-center md:grid-cols-3"></div>
			</section>
		</>

		// <div className='flex justify-around'>
		// 	{heroes.map((hero) => <Hero key={hero._id} {...hero} /> )}
		// </div>
	);
}

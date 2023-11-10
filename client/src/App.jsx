import { useEffect, useState } from 'react';

export default function App() {
	const [heroes, setHeroes] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3030/data/heroes')
			.then((res) => res.json())
			.then((heroes) => {
				console.log(heroes);
				setHeroes(heroes);
			});
	}, []);

	return (
		<>
			{heroes.map((h) => (
				<>
					<h1 key={h._id}>{h.name}</h1>
					<img src={h.imageUrl} />
				</>
			))}
		</>
	);
}

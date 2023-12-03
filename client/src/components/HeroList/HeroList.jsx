import Hero from "../Heroes/Hero/Hero.jsx";

/* eslint-disable react/prop-types */
export default function HeroList({heroes}) {
	return (
		<ul className="flex gap-10 flex-wrap justify-between m-5">
			{heroes.map((hero) => (
				<li key={hero._id} className="w-5/12 h-auto">
					<Hero {...hero} />
				</li>
			))}
		</ul>
	);
}

import { useEffect } from 'react';
import CarouselComp from './Carousel/CarouselComp.jsx';

export default function Home() {
	useEffect(() => {
		document.title = 'Начало';
	}, []);

	return <CarouselComp />;
}

import { Carousel, initTE } from 'tw-elements';
initTE({ Carousel });
import styles from './CarouselComp.module.css';

export default function CarouselComp() {
	return (
		<div
			id="carouselExampleControls"
			className="relative"
			data-te-carousel-init=""
			data-te-ride="carousel"
		>
			{/*Carousel items*/}
			<div
				className={`${styles.carouselHeight} brightness-50 relative w-full overflow-hidden after:clear-both after:block after:content-['']`}
			>
				{/*First item*/}
				<div
					className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
					data-te-carousel-item=""
					data-te-carousel-active=""
				>
					<img
						src="/assets/heroes.jpg"
						className="block w-full"
						alt="Bulgarian Revolutionist"
					/>
				</div>
				{/*Second item*/}
				<div
					className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
					data-te-carousel-item=""
				>
					<img
						src="/assets/olympic.jpg"
						className="block w-full"
						alt="Olympic Gold Medalists"
					/>
				</div>
				{/*Third item*/}
				<div
					className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
					data-te-carousel-item=""
				>
					<img
						src="/assets/kings.jpg"
						className="block w-full"
						alt="Kings"
					/>
				</div>
			</div>
			{/*Carousel controls - prev item*/}
			<button
				className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
				type="button"
				data-te-target="#carouselExampleControls"
				data-te-slide="prev"
			>
				<span className="inline-block h-8 w-8">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="h-6 w-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M15.75 19.5L8.25 12l7.5-7.5"
						/>
					</svg>
				</span>
				<span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
					Previous
				</span>
			</button>
			{/*Carousel controls - next item*/}
			<button
				className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
				type="button"
				data-te-target="#carouselExampleControls"
				data-te-slide="next"
			>
				<span className="inline-block h-8 w-8">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="h-6 w-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M8.25 4.5l7.5 7.5-7.5 7.5"
						/>
					</svg>
				</span>
				<span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
					Next
				</span>
			</button>
		</div>
	);
}

import { Ripple, initTE } from 'tw-elements';

initTE({ Ripple });

export default function Search() {
	return (
		<div className="mb-3">
			<div className="relative mb-4 flex justify-center flex-wrap">
				<input
					type="search"
					className="relative block min-w-0 rounded-md border-2 border-solid border-green-500 bg-green-500 bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-white outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-green-500 focus:text-white focus:shadow-2xl focus:outline-none placeholder:text-white"
					placeholder="Търси"
					aria-label="Search"
					aria-describedby="button-addon3"
				/>
				<button
					className="relative z-[2] rounded-md bg-red-500 border-2 border-red-500 px-6 py-2 text-xs font-medium uppercase text-white transition duration-150 ease-in-out hover:bg-opacity-80 focus:outline-none focus:ring-0"
					type="button"
					id="button-addon3"
					data-te-ripple-init=""
				>
					Търси
				</button>
			</div>
		</div>
	);
}

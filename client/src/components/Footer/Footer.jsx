export default function Footer() {
	return (
		<>
			{/*Footer container*/}
			<footer className="mt-3 flex flex-col items-center text-center text-white">
				{/*Copyright section*/}
				<div className="w-full bg-green-600 p-4 text-center text-white">
					<p>
						© 2023 Copyright
						<a
							className="ml-2 hover:text-red-500"
							href="https://github.com/RosenDobrev10"
							target="blank"
						>
							Rosen Dobrev
						</a>
					</p>
				</div>
			</footer>
		</>
	);
}

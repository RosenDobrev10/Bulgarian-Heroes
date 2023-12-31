export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<>
			<footer className="mt-3 flex flex-col items-center text-center text-white">
				<div className="w-full bg-green-600 p-4 text-center text-white">
					<p>
						Героите на България © 2023-{currentYear}
						<a
							className="ml-1 hover:text-red-500"
							href="https://github.com/RosenDobrev10"
							target="blank"
						>
							Росен Добрев.
						</a>
						<span className="ml-1">Всички права запазени.</span>
					</p>
				</div>
			</footer>
		</>
	);
}

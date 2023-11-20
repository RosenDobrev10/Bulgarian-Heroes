import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {

	useEffect(() => {
		document.title = '404';
	}, []);

	return (
		<>
			<div className="bg-gradient-to-b from-white via-green-500 to-red-500">
				<div className="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
					<div className="bg-gradient-to-b from-white via-green-500 to-red-500 shadow-2xl overflow-hidden sm:rounded-lg pb-8">
						<div className="border-t border-gray-200 text-center pt-8">
							<h1 className="text-9xl font-bold text-white">
								404
							</h1>
							<h1 className="text-6xl font-medium py-8 text-white">
								Страницата не е намерена
							</h1>
							<p className="text-2xl pb-8 px-12 font-medium text-white">
								Търсената от Вас страница не съществува. Тя може да е била преместена или изтрита.
							</p>
							<Link to='/' className="bg-white shadow-2xl hover:bg-gradient-to-b from-white via-green-500 to-red-500 hover:text-white text-green-500 font-semibold px-10 py-3 rounded-md mr-6">
								НАЧАЛО
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

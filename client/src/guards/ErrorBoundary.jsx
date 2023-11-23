/* eslint-disable react/prop-types */
import { Component } from 'react';

export class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError() {
		return { hasError: true };
	}

	componentDidCatch(error, info) {
		console.log('React info for crash: ', info);
		console.error('React ErrorBoundary message: ', error);
	}

	render() {
		if (this.state.hasError) {
			return (
				<>
					<main className="h-screen w-full flex flex-col justify-center items-center bg-white">
						<h1 className=" text-9xl font-extrabold text-green-500 tracking-widest">
							404
						</h1>
						<div className="bg-green-500 text-white px-2 text-sm rounded rotate-12 absolute">
							Възникна неочаквана грешка 
						</div>
						<button className="mt-5">
							<a className="relative inline-block text-sm font-medium text-green group active:text-orange-500 focus:outline-none focus:ring">
								<span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0" />
								<span className="relative block px-8 py-3 text-white bg-red-500 border border-current">
									<a href="/">Начало</a>
								</span>
							</a>
						</button>
					</main>
				</>
			);
		}

		return this.props.children;
	}
}

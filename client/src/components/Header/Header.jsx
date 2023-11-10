import { Tab, initTE } from 'tw-elements';
initTE({ Tab });

import {NavLink} from 'react-router-dom'

export default function Header() {
	return (
		<>
			{/*Pills navigation*/}
			<ul
				className="mb-1 flex justify-around list-none flex-col flex-wrap pl-4 md:flex-row"
				role="tablist"
				data-te-nav-ref=""
			>
				<li role="home" className="flex-auto text-center">
					<a
						href="#pills-home01"
						className="my-2 block rounded bg-green-500 px-7 pb-3.5 pt-4 text-sm font-medium uppercase leading-tight text-white hover:text-red-500 md:mr-4"
						id="pills-home-tab01"
						data-te-toggle="pill"
						data-te-target="#pills-home01"
						data-te-nav-active=""
						role="tab"
						aria-controls="pills-home01"
						aria-selected="true"
					>
						Home
					</a>
				</li>
				<li role="heroes" className="flex-auto text-center">
					<a
						href="#pills-heroes01"
						className="my-2 block rounded bg-green-500 px-7 pb-3.5 pt-4 text-sm font-medium uppercase leading-tight text-white hover:text-red-500 md:mr-4"
						id="pills-heroes-tab01"
						data-te-toggle="pill"
						data-te-target="#pills-heroes01"
						role="tab"
						aria-controls="pills-heroes01"
						aria-selected="false"
					>
						Heroes
					</a>
				</li>
				<li role="search" className="flex-auto text-center">
					<a
						href="#pills-search01"
						className="my-2 block rounded bg-green-500 px-7 pb-3.5 pt-4 text-sm font-medium uppercase leading-tight text-white hover:text-red-500 md:mr-4"
						id="pills-search-tab01"
						data-te-toggle="pill"
						data-te-target="#pills-search01"
						role="tab"
						aria-controls="pills-search01"
						aria-selected="false"
					>
						Search
					</a>
				</li>
				{/* NOT LOGGED */}
				<li role="login" className="flex-auto text-center">
					<a
						href="#pills-login01"
						className="my-2 block rounded bg-green-500 px-7 pb-3.5 pt-4 text-sm font-medium uppercase leading-tight text-white hover:text-red-500 md:mr-4"
						id="pills-login-tab01"
						data-te-toggle="pill"
						data-te-target="#pills-login01"
						role="tab"
						aria-controls="pills-login01"
						aria-selected="false"
					>
						Login
					</a>
				</li>
				<li role="register" className="flex-auto text-center">
					<a
						href="#pills-register01"
						className="my-2 block rounded bg-green-500 px-7 pb-3.5 pt-4 text-sm font-medium uppercase leading-tight text-white hover:text-red-500 md:mr-4"
						id="pills-register-tab01"
						data-te-toggle="pill"
						data-te-target="#pills-register01"
						role="tab"
						aria-controls="pills-register01"
						aria-selected="false"
					>
						Register
					</a>
				</li>
				{/*LOGGED */}
				<li role="add" className="flex-auto text-center">
					<a
						href="#pills-add01"
						className="my-2 block rounded bg-green-500 px-7 pb-3.5 pt-4 text-sm font-medium uppercase leading-tight text-white hover:text-red-500 md:mr-4"
						id="pills-add-tab01"
						data-te-toggle="pill"
						data-te-target="#pills-add01"
						role="tab"
						aria-controls="pills-add01"
						aria-selected="false"
					>
						Add
					</a>
				</li>
				<li role="profile" className="flex-auto text-center">
					<a
						href="#pills-profile01"
						className="my-2 block rounded bg-green-500 px-7 pb-3.5 pt-4 text-sm font-medium uppercase leading-tight text-white hover:text-red-500 md:mr-4"
						id="pills-profile-tab01"
						data-te-toggle="pill"
						data-te-target="#pills-profile01"
						role="tab"
						aria-controls="pills-profile01"
						aria-selected="false"
					>
						Profile
					</a>
				</li>
				<li role="logout" className="flex-auto text-center">
					<a
						href="#pills-logout01"
						className="my-2 block rounded bg-green-500 px-7 pb-3.5 pt-4 text-sm font-medium uppercase leading-tight text-white hover:text-red-500 md:mr-4"
						id="pills-logout-tab01"
						data-te-toggle="pill"
						data-te-target="#pills-logout01"
						role="tab"
						aria-controls="pills-logout01"
						aria-selected="false"
					>
						Logout
					</a>
				</li>
			</ul>
		</>
	);
}

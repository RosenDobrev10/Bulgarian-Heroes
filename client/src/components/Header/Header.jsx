import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { Tab, initTE } from 'tw-elements';
initTE({ Tab });

import useAuthContext from '../../hooks/useAuthContext.js';

export default function Header() {
	const { isLoggedIn, getUserEmail } = useAuthContext();
	return (
		<>
			<ul
				className={`${styles.stickyHeader} bg-gray-100 mb-1 flex justify-around list-none flex-col flex-wrap pl-4 md:flex-row`}
				role="tablist"
				data-te-nav-ref
			>
				<li role="home" className="flex-auto text-center">
					<NavLink
						to="/"
						className="hover:scale-105 my-2 block rounded bg-green-500 px-7 pb-3.5 pt-4 text-sm font-medium uppercase leading-tight text-white hover:text-red-500 md:mr-4"
						id="pills-home-tab01"
						data-te-toggle="pill"
						data-te-target="#pills-home01"
						data-te-nav-active
						role="tab"
						aria-controls="pills-home01"
						aria-selected="true"
					>
						Начало
					</NavLink>
				</li>
				<li role="heroes" className="flex-auto text-center">
					<NavLink
						to="/heroes"
						className="hover:scale-105 my-2 block rounded bg-green-500 px-7 pb-3.5 pt-4 text-sm font-medium uppercase leading-tight text-white hover:text-red-500 md:mr-4"
						id="pills-heroes-tab01"
						data-te-toggle="pill"
						data-te-target="#pills-heroes01"
						role="tab"
						aria-controls="pills-heroes01"
						aria-selected="false"
					>
						Герои
					</NavLink>
				</li>
				<li role="search" className="flex-auto text-center">
					<NavLink
						to="/search"
						className="hover:scale-105 my-2 block rounded bg-green-500 px-7 pb-3.5 pt-4 text-sm font-medium uppercase leading-tight text-white hover:text-red-500 md:mr-4"
						id="pills-search-tab01"
						data-te-toggle="pill"
						data-te-target="#pills-search01"
						role="tab"
						aria-controls="pills-search01"
						aria-selected="false"
					>
						Търси
					</NavLink>
				</li>

				{isLoggedIn ? (
					<>
						{/* LOGGED IN */}
						<li role="add" className="flex-auto text-center">
							<NavLink
								to="/add"
								className="hover:scale-105 my-2 block rounded bg-green-500 px-7 pb-3.5 pt-4 text-sm font-medium uppercase leading-tight text-white hover:text-red-500 md:mr-4"
								id="pills-add-tab01"
								data-te-toggle="pill"
								data-te-target="#pills-add01"
								role="tab"
								aria-controls="pills-add01"
								aria-selected="false"
							>
								Добави
							</NavLink>
						</li>
						<li role="profile" className="flex-auto text-center">
							<NavLink
								to="/profile"
								className="hover:scale-105 my-2 block rounded bg-green-500 px-7 pt-1 text-sm font-medium uppercase leading-normal text-white hover:text-red-500 md:mr-4"
								id="pills-profile-tab01"
								data-te-toggle="pill"
								data-te-target="#pills-profile01"
								role="tab"
								aria-controls="pills-profile01"
								aria-selected="false"
							>
								Профил на<span className='block'>{getUserEmail}</span>
							</NavLink>
						</li>
						<li role="logout" className="flex-auto text-center">
							<NavLink
								to="/logout"
								className="hover:scale-105 my-2 block rounded bg-green-500 px-7 pb-3.5 pt-4 text-sm font-medium uppercase leading-tight text-white hover:text-red-500 md:mr-4"
								id="pills-logout-tab01"
								data-te-toggle="pill"
								data-te-target="#pills-logout01"
								role="tab"
								aria-controls="pills-logout01"
								aria-selected="false"
							>
								Изход
							</NavLink>
						</li>
					</>
				) : (
					<>
						{/* NOT LOGGED IN */}
						<li role="login" className="flex-auto text-center">
							<NavLink
								to="/login"
								className="hover:scale-105 my-2 block rounded bg-green-500 px-7 pb-3.5 pt-4 text-sm font-medium uppercase leading-tight text-white hover:text-red-500 md:mr-4"
								id="pills-login-tab01"
								data-te-toggle="pill"
								data-te-target="#pills-login01"
								role="tab"
								aria-controls="pills-login01"
								aria-selected="false"
							>
								Вход
							</NavLink>
						</li>
						<li role="register" className="flex-auto text-center">
							<NavLink
								to="/register"
								className="hover:scale-105 my-2 block rounded bg-green-500 px-7 pb-3.5 pt-4 text-sm font-medium uppercase leading-tight text-white hover:text-red-500 md:mr-4"
								id="pills-register-tab01"
								data-te-toggle="pill"
								data-te-target="#pills-register01"
								role="tab"
								aria-controls="pills-register01"
								aria-selected="false"
							>
								Регистрация
							</NavLink>
						</li>
					</>
				)}
			</ul>
		</>
	);
}

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Login.module.css';

import useAuthContext from '../../hooks/useAuthContext.js';
import useForm from '../../hooks/useForm.js';
import { loginFormKeys } from '../../core/environments/constants.js';
import loginValidation from './loginValidation.js';

import Message from '../Message/Message.jsx';

export default function Login() {
	const [showPassword, setShowPassword] = useState(false);
	const { loginSubmitHandler } = useAuthContext();

	useEffect(() => {
		document.title = 'Вход';
	}, []);

	function togglePasswordVisibility() {
		setShowPassword(!showPassword);
	}

	const { formValues, formErrorMessage, serverErrorMessage, isLoading, isInvalidForm, onChange, onBlur, onSubmit} = useForm(loginSubmitHandler,
		{
			[loginFormKeys.email]: '',
			[loginFormKeys.password]: ''
		},
		loginValidation
	);

	return (
		<>
			<div className="max-w-xl container mx-auto rounded-lg p-10 shadow-2xl mt-4">

			{!isLoading && serverErrorMessage && <Message serverErrorMessage={serverErrorMessage} />}

				<div className="w-full">
					<p
						className={`${styles.textShadow} tracking-widest underline underline-offset-8 text-center text-neutral-600 text-2xl font-semibold`}
					>
						Влезте в профила си
					</p>
					<div className="mt-10">
						<form className="px-10" onSubmit={onSubmit}>

							{/* EMAIL */}
							<div className="relative mt-2">
								<label
									htmlFor={loginFormKeys.email}
									className="text-neutral-600 text-xl font-semibold"
								>
									Имейл
								</label>
								{formErrorMessage.email && (
									<div
										className="absolute right-0 top-0 inline-flex items-center rounded-lg bg-danger-100 p-1 text-base text-danger-700"
										role="alert"
									>
										<span className="mr-2">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 512 512"
												fill="currentColor"
												className="h-5 w-5"
											>
												<path
													fillRule="evenodd"
													d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0"
													clipRule="evenodd"
												/>
											</svg>
										</span>
										{formErrorMessage.email}
									</div>
								)}
								<div className="flex items-center justify-between py-2 rounded border-2 border-green-500">
									<input
										type="text"
										name={loginFormKeys.email}
										placeholder="Въведете имейл"
										id={loginFormKeys.email}
										className="w-full text-neutral-600 placeholder:text-neutral-600 focus:placeholder:opacity-0 px-4 outline-none"
										onChange={onChange}
										onBlur={onBlur}
										value={formValues[loginFormKeys.email]}
									/>
								</div>
							</div>

							{/* PASSWORD */}
							<div className="relative mt-6">
								<label
									htmlFor={loginFormKeys.password}
									className="text-neutral-600 text-xl font-semibold"
								>
									Парола
								</label>
								{formErrorMessage.password && (
									<div
										className="absolute right-0 top-0 inline-flex items-center rounded-lg bg-danger-100 p-1 text-base text-danger-700"
										role="alert"
									>
										<span className="mr-2">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 512 512"
												fill="currentColor"
												className="h-5 w-5"
											>
												<path
													fillRule="evenodd"
													d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0"
													clipRule="evenodd"
												/>
											</svg>
										</span>
										{formErrorMessage.password}
									</div>
								)}
								<div className="flex items-center justify-between py-2 rounded border-2 border-green-500">
									<input
										type={showPassword ? 'text' : 'password'}
										name={loginFormKeys.password}
										placeholder="Въведете парола"
										id={loginFormKeys.password}
										className="w-full text-neutral-600 placeholder:text-neutral-600 focus:placeholder:opacity-0 px-4 outline-none"
										onChange={onChange}
										onBlur={onBlur}
										value={
											formValues[loginFormKeys.password]
										}
									/>
									<button
										data-testid="togglePassword"
										type="button"
										onClick={togglePasswordVisibility}
									>
										{showPassword ? (
											<svg
												className="pr-3"
												fill="green"
												xmlns="http://www.w3.org/2000/svg"
												height="1.4em"
												viewBox="0 0 640 512"
											>
												<path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z" />
											</svg>
										) : (
											<svg
												className="pr-3"
												fill="green"
												xmlns="http://www.w3.org/2000/svg"
												height="1.4em"
												viewBox="0 0 576 512"
											>
												<path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
											</svg>
										)}
									</button>
								</div>
							</div>

							{/* LOGIN BUTTON */}
							<button
							disabled={isInvalidForm}
							className={`${isInvalidForm ? 'cursor-not-allowed' : 'cursor-pointer'} hover:drop-shadow-lg hover:opacity-80 block bg-green-400 rounded-lg shadow text-center text-white text-base font-semibold w-full py-3 mt-9`}>
								Влезте
							</button>

							{/* OR */}
							<div className="relative flex items-center mt-8">
								<div className="border h-0 w-2/4 border-neutral-600" />
								<div className=" text-neutral-600 px-4 text-sm font-normal">
									или
								</div>
								<div className=" border h-0 w-2/4 border-neutral-600" />
							</div>

							{/* REGISTER BUTTON */}
							<Link
								to="/register"
								className="hover:drop-shadow-lg hover:opacity-80 bg-red-500 block rounded-lg text-center text-white text-base font-semibold w-full py-3 mt-9"
							>
								Регистрирайте се
							</Link>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}
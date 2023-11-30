import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import useForm from '../../hooks/useForm.js';
import { addFormKeys } from '../../core/environments/constants.js';
import { createHero } from '../../core/api/heroesApi.js';
import addValidation from './addValidation.js';
import checkForError from '../../util/checkForError.js';

import Message from '../Message/Message.jsx';
import Spinner from '../Spinner/Spinner.jsx';

export default function Add() {
	const navigate = useNavigate();

	useEffect(() => {
		document.title = 'Добави';
	}, []);

	async function createSubmitHandler(formValues) {
			await createHero(formValues);
			navigate('/heroes');
	}

	const { formValues, formErrorMessage, serverErrorMessage, isLoading, onChange, onBlur, onSubmit } = useForm(createSubmitHandler, {
		[addFormKeys.name]: '',
		[addFormKeys.imageUrl]: '',
		[addFormKeys.occupation]: '',
		[addFormKeys.birthplace]: '',
		[addFormKeys.born]: '',
		[addFormKeys.description]: ''
	}, addValidation);

	return (
		<>
			<div className="max-w-xl container mx-auto rounded-lg p-10 shadow-2xl mt-4">

			{isLoading && <Spinner/>}

			{!isLoading && serverErrorMessage && <Message serverErrorMessage={serverErrorMessage} />}

				<div className="w-full">
					<p className="tracking-widest underline underline-offset-8 text-center text-neutral-600 text-2xl font-semibold">
						Добави герой
					</p>
					<div className="mt-10">
						<form className="px-10" onSubmit={onSubmit}>

							{/* NAME */}
							<div className="relative mt-2">
								<label
									htmlFor={addFormKeys.name}
									className="text-neutral-600 text-xl font-semibold"
								>
									Име
								</label>
								{formErrorMessage.name && (
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
										{formErrorMessage.name}
									</div>
								)}
								<div className="flex items-center justify-between py-2 rounded border-2 border-green-500">
									<input
										type="text"
										name={addFormKeys.name}
										placeholder="Въведете име"
										id={addFormKeys.name}
										className="w-full text-neutral-600 placeholder:text-neutral-600 focus:placeholder:opacity-0 px-4 outline-none"
										onChange={onChange}
										onBlur={onBlur}
										value={formValues[addFormKeys.name]}
									/>
								</div>
							</div>

							{/* IMAGE URL */}
							<div className="relative mt-6">
								<label
									htmlFor={addFormKeys.imageUrl}
									className="text-neutral-600 text-xl font-semibold"
								>
									Линк към снимка
								</label>
								{formErrorMessage.imageUrl && (
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
										{formErrorMessage.imageUrl}
									</div>
								)}
								<div className="flex items-center justify-between py-2 rounded border-2 border-green-500">
									<input
										type="text"
										name={addFormKeys.imageUrl}
										placeholder="Въведете линк към снимка"
										id={addFormKeys.imageUrl}
										className="w-full text-neutral-600 placeholder:text-neutral-600 focus:placeholder:opacity-0 px-4 outline-none"
										onChange={onChange}
										onBlur={onBlur}
										value={formValues[addFormKeys.imageUrl]}
									/>
								</div>
							</div>

							{/* OCCUPATION */}
							<div className="relative mt-6">
								<label
									htmlFor={addFormKeys.occupation}
									className="text-neutral-600 text-xl font-semibold"
								>
									Дейност
								</label>
								{formErrorMessage.occupation && (
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
										{formErrorMessage.occupation}
									</div>
								)}
								<div className="flex items-center justify-between py-2 rounded border-2 border-green-500">
									<input
										type="text"
										name={addFormKeys.occupation}
										placeholder="Въведете дейност"
										id={addFormKeys.occupation}
										className="w-full text-neutral-600 placeholder:text-neutral-600 focus:placeholder:opacity-0 px-4 outline-none"
										onChange={onChange}
										onBlur={onBlur}
										value={formValues[addFormKeys.occupation]}
									/>
								</div>
							</div>

							{/* BIRTHPLACE */}
							<div className="relative mt-6">
								<label
									htmlFor={addFormKeys.birthplace}
									className="text-neutral-600 text-xl font-semibold"
								>
									Родно място
								</label>
								{formErrorMessage.birthplace && (
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
										{formErrorMessage.birthplace}
									</div>
								)}
								<div className="flex items-center justify-between py-2 rounded border-2 border-green-500">
									<input
										type="text"
										name={addFormKeys.birthplace}
										placeholder="Въведете родно място"
										id={addFormKeys.birthplace}
										className="w-full text-neutral-600 placeholder:text-neutral-600 focus:placeholder:opacity-0 px-4 outline-none"
										onChange={onChange}
										onBlur={onBlur}
										value={formValues[addFormKeys.birthplace]}
									/>
								</div>
							</div>

							{/* BORN */}
							<div className="relative mt-6">
								<label
									htmlFor={addFormKeys.born}
									className="text-neutral-600 text-xl font-semibold"
								>
									Година на раждане
								</label>
								{formErrorMessage.born && (
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
										{formErrorMessage.born}
									</div>
								)}
								<div className="flex items-center justify-between py-2 rounded border-2 border-green-500">
									<input
										type="text"
										name={addFormKeys.born}
										placeholder="Въведете година на раждане"
										id={addFormKeys.born}
										className="w-full text-neutral-600 placeholder:text-neutral-600 focus:placeholder:opacity-0 px-4 outline-none"
										onChange={onChange}
										onBlur={onBlur}
										value={formValues[addFormKeys.born]}
									/>
								</div>
							</div>

							{/* DESCRIPTION */}
							<div className="relative mt-6">
								<label
									htmlFor={addFormKeys.description}
									className="text-neutral-600 text-xl font-semibold"
								>
									Кратко описание
								</label>
								{formErrorMessage.description && (
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
										{formErrorMessage.description}
									</div>
								)}
								<div className="flex items-center justify-between py-2 rounded border-2 border-green-500">
									<textarea
										name={addFormKeys.description}
										placeholder="Въведете кратко описание"
										id={addFormKeys.description}
										className="w-full text-neutral-600 placeholder:text-neutral-600 focus:placeholder:opacity-0 px-4 outline-none"
										onChange={onChange}
										onBlur={onBlur}
										value={formValues[addFormKeys.description]}
									></textarea>
								</div>
							</div>

							{/* ADD BUTTON */}
							<button 
							disabled={checkForError(formErrorMessage)}
							className={`${checkForError(formErrorMessage) ? 'cursor-not-allowed' : 'cursor-pointer'} hover:drop-shadow-lg hover:opacity-80 bg-red-500 block rounded-lg shadow text-center text-white text-base font-semibold w-full py-3 mt-9`}>
								Добави
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}

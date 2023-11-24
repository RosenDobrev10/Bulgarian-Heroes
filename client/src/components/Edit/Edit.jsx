import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import useForm from '../../hooks/useForm.js';
import { addFormKeys } from '../../core/environments/constants.js';
import { editHeroById, getHeroById } from '../../core/api/heroesApi.js';
import addValidation from '../Add/addValidation.js';

import Spinner from '../Spinner/Spinner.jsx';
import Message from '../Message/Message.jsx';

export default function Edit() {
	const [hero, setHero] = useState({});
	const [isLoadingMain, setIsLoadingMain] = useState(true);
	const [errorMessage, setErrorMessage] = useState('');
	const navigate = useNavigate();
	const { heroId } = useParams();

    useEffect(() => {
		document.title = 'Промени';
		getHeroById(heroId)
			.then((heroData) => setHero(heroData))
			.catch((error) => setErrorMessage(error.message))
			.finally(() => setIsLoadingMain(false));
	}, [heroId]);
    // TODO make EDIT work

    async function editSubmitHandler(formValues) {
		try {
			await editHeroById(heroId, formValues);
			navigate(`/heroes/${heroId}`);
		} catch (error) {
			setErrorMessage(error.message);
		}
	}

	const { formValues, formErrorMessage, serverErrorMessage, isLoading, onChange, onBlur, onSubmit } = useForm(editSubmitHandler,
		{
			[addFormKeys.name]: hero.name,
			[addFormKeys.imageUrl]: hero.imageUrl,
			[addFormKeys.occupation]: hero.occupation,
			[addFormKeys.birthplace]: hero.birthplace,
			[addFormKeys.born]: hero.born,
			[addFormKeys.description]: hero.description
		},
		addValidation
	);

	return (
		<>
			<div className="max-w-xl container mx-auto rounded-lg p-10 shadow-2xl mt-4">

				{isLoadingMain && <Spinner />}

				{errorMessage && <Message errorMessage={errorMessage} />}

				{!isLoading && serverErrorMessage && <Message serverErrorMessage={serverErrorMessage} />}

				<div className="w-full">
					<p className="tracking-widest underline underline-offset-8 text-center text-neutral-600 text-2xl font-semibold">
						Промени герой
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
												viewBox="0 0 24 24"
												fill="currentColor"
												className="h-5 w-5"
											>
												<path
													fillRule="evenodd"
													d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
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
												viewBox="0 0 24 24"
												fill="currentColor"
												className="h-5 w-5"
											>
												<path
													fillRule="evenodd"
													d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
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
												viewBox="0 0 24 24"
												fill="currentColor"
												className="h-5 w-5"
											>
												<path
													fillRule="evenodd"
													d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
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
										value={
											formValues[addFormKeys.occupation]
										}
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
												viewBox="0 0 24 24"
												fill="currentColor"
												className="h-5 w-5"
											>
												<path
													fillRule="evenodd"
													d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
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
										value={
											formValues[addFormKeys.birthplace]
										}
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
												viewBox="0 0 24 24"
												fill="currentColor"
												className="h-5 w-5"
											>
												<path
													fillRule="evenodd"
													d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
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
												viewBox="0 0 24 24"
												fill="currentColor"
												className="h-5 w-5"
											>
												<path
													fillRule="evenodd"
													d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
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
										value={
											formValues[addFormKeys.description]
										}
									></textarea>
								</div>
							</div>

							{/* ADD BUTTON */}
							<button className="hover:drop-shadow-lg hover:opacity-80 bg-red-500 block rounded-lg shadow text-center text-white text-base font-semibold w-full py-3 mt-9">
								Промени
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}
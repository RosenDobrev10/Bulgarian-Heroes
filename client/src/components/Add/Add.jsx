import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { createFormKeys } from '../../core/environments/constants.js';
import useForm from '../../hooks/useForm.js';
import { createHero } from '../../core/api/heroesApi.js';

export default function Add() {
	const navigate = useNavigate();

	useEffect(() => {
		document.title = 'Добави';
	}, []);

	const createSubmitHandler = async (formValues) => {
		try {
			await createHero(formValues);
			navigate('/heroes');
		} catch (error) {
			console.log(error.message);
		}
	};

	const { formValues, onChange, onSubmit } = useForm(createSubmitHandler, {
		[createFormKeys.name]: '',
		[createFormKeys.imageUrl]: '',
		[createFormKeys.occupation]: '',
		[createFormKeys.birthplace]: '',
		[createFormKeys.born]: '',
		[createFormKeys.description]: ''
	});

	return (
		<>
			<div className="max-w-xl container mx-auto rounded-lg p-10 shadow-2xl mt-4">
				<div className="w-full">
					<p className="tracking-widest underline underline-offset-8 text-center text-neutral-600 text-2xl font-semibold">
						Добави герой
					</p>
					<div className="mt-10">
						<form className="px-10" onSubmit={onSubmit}>
							{/* NAME */}
							<div className="mt-2">
								<label
									htmlFor={createFormKeys.name}
									className="text-neutral-600 text-xl font-semibold"
								>
									Име
								</label>
								<div className="flex items-center justify-between py-2 rounded border-2 border-green-500">
									<input
										type="text"
										name={createFormKeys.name}
										placeholder="Въведете име"
										id={createFormKeys.name}
										className="w-full text-neutral-600 placeholder:text-neutral-600 focus:placeholder:opacity-0 px-4 outline-none"
										onChange={onChange}
										value={formValues[createFormKeys.name]}
									/>
								</div>
							</div>

							{/* IMAGE URL */}
							<div className="mt-6">
								<label
									htmlFor={createFormKeys.imageUrl}
									className="text-neutral-600 text-xl font-semibold"
								>
									Линк към снимка
								</label>
								<div className="flex items-center justify-between py-2 rounded border-2 border-green-500">
									<input
										type="text"
										name={createFormKeys.imageUrl}
										placeholder="Въведете линк към снимка"
										id={createFormKeys.imageUrl}
										className="w-full text-neutral-600 placeholder:text-neutral-600 focus:placeholder:opacity-0 px-4 outline-none"
										onChange={onChange}
										value={
											formValues[createFormKeys.imageUrl]
										}
									/>
								</div>
							</div>

							{/* OCCUPATION */}
							<div className="mt-6">
								<label
									htmlFor={createFormKeys.occupation}
									className="text-neutral-600 text-xl font-semibold"
								>
									Дейност
								</label>
								<div className="flex items-center justify-between py-2 rounded border-2 border-green-500">
									<input
										type="text"
										name={createFormKeys.occupation}
										placeholder="Въведете дейност"
										id={createFormKeys.occupation}
										className="w-full text-neutral-600 placeholder:text-neutral-600 focus:placeholder:opacity-0 px-4 outline-none"
										onChange={onChange}
										value={
											formValues[
												createFormKeys.occupation
											]
										}
									/>
								</div>
							</div>

							{/* BIRTHPLACE */}
							<div className="mt-6">
								<label
									htmlFor={createFormKeys.birthplace}
									className="text-neutral-600 text-xl font-semibold"
								>
									Родно място
								</label>
								<div className="flex items-center justify-between py-2 rounded border-2 border-green-500">
									<input
										type="text"
										name={createFormKeys.birthplace}
										placeholder="Въведете родно място"
										id={createFormKeys.birthplace}
										className="w-full text-neutral-600 placeholder:text-neutral-600 focus:placeholder:opacity-0 px-4 outline-none"
										onChange={onChange}
										value={
											formValues[
												createFormKeys.birthplace
											]
										}
									/>
								</div>
							</div>

							{/* BORN */}
							<div className="mt-6">
								<label
									htmlFor={createFormKeys.born}
									className="text-neutral-600 text-xl font-semibold"
								>
									Година на раждане
								</label>
								<div className="flex items-center justify-between py-2 rounded border-2 border-green-500">
									<input
										type="text"
										name={createFormKeys.born}
										placeholder="Въведете година на раждане"
										id={createFormKeys.born}
										className="w-full text-neutral-600 placeholder:text-neutral-600 focus:placeholder:opacity-0 px-4 outline-none"
										onChange={onChange}
										value={formValues[createFormKeys.born]}
									/>
								</div>
							</div>

							{/* DESCRIPTION */}
							<div className="mt-6">
								<label
									htmlFor={createFormKeys.description}
									className="text-neutral-600 text-xl font-semibold"
								>
									Кратко описание
								</label>
								<div className="flex items-center justify-between py-2 rounded border-2 border-green-500">
									<textarea
										name={createFormKeys.description}
										placeholder="Въведете кратко описание"
										id={createFormKeys.description}
										className="w-full text-neutral-600 placeholder:text-neutral-600 focus:placeholder:opacity-0 px-4 outline-none"
										onChange={onChange}
										value={
											formValues[
												createFormKeys.description
											]
										}
									></textarea>
								</div>
							</div>

							{/* ADD BUTTON */}
							<button className="hover:drop-shadow-lg hover:opacity-80 bg-green-400 block rounded-lg shadow text-center text-white text-base font-semibold w-full py-3 mt-9">
								Добави
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}

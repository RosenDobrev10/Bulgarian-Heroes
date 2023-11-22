import { useState, useEffect } from 'react';

export default function Add() {
	useEffect(() => {
		document.title = 'Добави';
	}, []);

	return (
		<>
			<div className="max-w-xl container mx-auto rounded-lg p-10 shadow-2xl mt-4">
				<div className="w-full">
					<p className="tracking-widest underline underline-offset-8 text-center text-neutral-600 text-2xl font-semibold">
						Добави герой
					</p>
					<div className="mt-10">
						<form className="px-10">
							{/* NAME */}
							<div className="mt-2">
								<label
									htmlFor="name"
									className="text-neutral-600 text-xl font-semibold"
								>
									Име
								</label>
								<div className="flex items-center justify-between py-2 rounded border-2 border-green-500">
									<input
										type="text"
										name="name"
										placeholder="Въведете име"
										id="name"
										className="w-full text-neutral-600 placeholder:text-neutral-600 focus:placeholder:opacity-0 px-4 outline-none"
									/>
								</div>
							</div>

							{/* IMAGE URL */}
							<div className="mt-6">
								<label
									htmlFor="imageUrl"
									className="text-neutral-600 text-xl font-semibold"
								>
									Линк към снимка
								</label>
								<div className="flex items-center justify-between py-2 rounded border-2 border-green-500">
									<input
										type="text"
										name="imageUrl"
										placeholder="Въведете линк към снимка"
										id="imageUrl"
										className="w-full text-neutral-600 placeholder:text-neutral-600 focus:placeholder:opacity-0 px-4 outline-none"
									/>
								</div>
							</div>

							{/* OCCUPATION */}
							<div className="mt-6">
								<label
									htmlFor="occupation"
									className="text-neutral-600 text-xl font-semibold"
								>
									Дейност
								</label>
								<div className="flex items-center justify-between py-2 rounded border-2 border-green-500">
									<input
										type="text"
										name="occupation"
										placeholder="Въведете дейност"
										id="occupation"
										className="w-full text-neutral-600 placeholder:text-neutral-600 focus:placeholder:opacity-0 px-4 outline-none"
									/>
								</div>
							</div>

							{/* BIRTHPLACE */}
							<div className="mt-6">
								<label
									htmlFor="birthplace"
									className="text-neutral-600 text-xl font-semibold"
								>
									Родно място
								</label>
								<div className="flex items-center justify-between py-2 rounded border-2 border-green-500">
									<input
										type="text"
										name="birthplace"
										placeholder="Въведете родно място"
										id="birthplace"
										className="w-full text-neutral-600 placeholder:text-neutral-600 focus:placeholder:opacity-0 px-4 outline-none"
									/>
								</div>
							</div>

							{/* BORN */}
							<div className="mt-6">
								<label
									htmlFor="born"
									className="text-neutral-600 text-xl font-semibold"
								>
									Година на раждане
								</label>
								<div className="flex items-center justify-between py-2 rounded border-2 border-green-500">
									<input
										type="text"
										name="born"
										placeholder="Въведете година на раждане"
										id="born"
										className="w-full text-neutral-600 placeholder:text-neutral-600 focus:placeholder:opacity-0 px-4 outline-none"
									/>
								</div>
							</div>

							{/* DESCRIPTION */}
							<div className="mt-6">
								<label
									htmlFor="description"
									className="text-neutral-600 text-xl font-semibold"
								>
									Кратко описание
								</label>
								<div className="flex items-center justify-between py-2 rounded border-2 border-green-500">
									<textarea
										name="description"
										placeholder="Въведете кратко описание"
										id="description"
										className="w-full text-neutral-600 placeholder:text-neutral-600 focus:placeholder:opacity-0 px-4 outline-none"
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

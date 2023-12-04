/* eslint-disable react/prop-types */

import useForm from '../../hooks/useForm.js';
import commentValidation from '../Comment/commentValidation.js';

import Message from '../Message/Message.jsx';

export default function AddComment({ addCommentHandler }) {

	const { formValues, formErrorMessage, serverErrorMessage, isLoading, isInvalidForm, onChange, onBlur, onSubmit } = useForm(addCommentHandler, {
			comment: ''
		},
		commentValidation
	);

	return (
		<>
			{!isLoading && serverErrorMessage && <Message serverErrorMessage={serverErrorMessage} />}

			<form className="w-full md:w-1/2 p-6 bg-white" onSubmit={onSubmit}>
				<div>
					<div className="relative flex flex-col mb-3">
                    {formErrorMessage.comment && (
									<div
										className="absolute right-0 -top-4 inline-flex items-center rounded-lg bg-danger-100 p-1 text-base text-danger-700"
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
										{formErrorMessage.comment}
									</div>
								)}
						<textarea
							id="message"
                            name="comment"
							rows={5}
							className="px-3 py-2 mt-2 border border-green-500 bg-white focus:border-red-500 focus:outline-none"
							onBlur={onBlur}
							onChange={onChange}
							value={formValues.comment}
						/>
					</div>
				</div>
				<div className="w-full pt-3">
					<button
                        disabled={isInvalidForm}
						className={`${isInvalidForm ? 'cursor-not-allowed' : 'cursor-pointer'} w-full bg-red-500 text-white px-4 py-2 font-semibold hover:opacity-80 text-xl cursor-pointer`}
					>
						Добави
					</button>
				</div>
			</form>
		</>
	);
}

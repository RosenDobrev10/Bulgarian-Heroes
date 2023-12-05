/* eslint-disable react/prop-types */

import { editCommentById } from '../../../core/api/commentsApi.js';
import commentValidation from '../commentValidation.js';
import useForm from '../../../hooks/useForm.js';

import Spinner from '../../Spinner/Spinner.jsx';
import Message from '../../Message/Message.jsx';

export default function EditComment({ toggleEditModal, editCommentHandler, comment, heroId}) {
	async function onSubmitEditHandler() {
		const editedComment = await editCommentById( comment._id, heroId, formValues.comment);
		editCommentHandler(editedComment);
		toggleEditModal();
	}

	const { formValues, formErrorMessage, serverErrorMessage, isLoading, isInvalidForm, onChange, onBlur, onSubmit} = useForm(onSubmitEditHandler,
		{
			comment: comment.comment
		},
		commentValidation
	);

	return (
		<>
			<div
				className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover bg-gradient-to-b from-white via-green-500 to-red-500"
				id="modal-id"
			>
				{isLoading && <Spinner />}

				{serverErrorMessage && <Message errorMessage={serverErrorMessage} />}

				<div className="absolute bg-black opacity-80 inset-0 z-0" />
				<div className="w-full max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-white">
						{/* BODY */}
						<div className="p-5">
							<form
								className="flex flex-col items-center w-full p-6 bg-white"
								onSubmit={onSubmit}
							>
                                <h2 className="mb-4 text-3xl font-medium text-green-500">Редактирай коментар</h2>
									<div className="relative">
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
                                            cols={35}
											className="px-3 py-2 mt-2 border border-green-500 bg-white focus:border-red-500 focus:outline-none"
											onBlur={onBlur}
											onChange={onChange}
											value={formValues.comment}
										/>
									</div>
								{/*footer*/}
								<div className="flex p-3 mt-2 text-center space-x-4">
									<button
										onClick={toggleEditModal}
										className="mb-2 md:mb-0 bg-red-500 px-5 py-2 text-sm text-white shadow-sm font-medium tracking-wider border rounded-full hover:shadow-lg hover:opacity-80"
									>
										Откажи
									</button>
									<button
										disabled={isInvalidForm}
										className={`${
											isInvalidForm
												? 'cursor-not-allowed'
												: 'cursor-pointer'
										} mb-2 md:mb-0 bg-green-500 px-5 py-2 text-sm text-white shadow-sm font-medium tracking-wider border rounded-full hover:shadow-lg hover:opacity-80`}
									>
										Редактирай
									</button>
								</div>
							</form>
						</div>
				</div>
			</div>
		</>
	);
}

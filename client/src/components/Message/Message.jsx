/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { Toast, initTE } from 'tw-elements';

export default function Message({ errorMessage }) {
	useEffect(() => {
		initTE({ Toast });
	}, []);

	return (
		<div
			className="pointer-events-auto mx-auto mb-4 hidden w-96 max-w-full rounded-lg bg-danger-100 bg-clip-padding text-sm text-danger-700 shadow-lg shadow-black/5 data-[te-toast-show]:block data-[te-toast-hide]:hidden"
			id="static-example"
			role="alert"
			aria-live="assertive"
			aria-atomic="true"
			data-te-autohide="false"
			data-te-toast-init=""
			data-te-toast-show=""
		>
			<div className="flex items-center justify-between rounded-t-lg border-b-2 border-danger-200 bg-danger-100 bg-clip-padding px-4 pb-2 pt-2.5 text-danger-700">
				<p className="flex items-center font-bold text-danger-700">
					Грешка
				</p>
				<div className="flex items-center">
					<button
						type="button"
						className="ml-2 box-content rounded-none border-none opacity-80 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
						data-te-toast-dismiss=""
						aria-label="Close"
					>
						<span className="w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="h-6 w-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</span>
					</button>
				</div>
			</div>
			<div className="break-words rounded-b-lg bg-danger-100 px-4 py-4 text-danger-700">
				{errorMessage}
			</div>
		</div>
	);
}

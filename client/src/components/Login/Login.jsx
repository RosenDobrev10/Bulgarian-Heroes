export default function Login() {
	return (
		<>
			<div className=" max-w-xl container mx-auto ">
				<div className=" w-full">
					<img
						src="./../images/Dummy_Logo (1).png"
						className="mx-auto"
						alt=""
					/>
					<p className="text-center text-neutral-600 text-base font-semibold">
						Login into your account
					</p>
					<div className="mt-10">
						<form action="" className="px-10">
							<div className="mt-2 ">
								<label
									htmlFor=""
									className="text-neutral-600 text-base font-normal"
								>
									Email Id :
								</label>
								<div className="flex my-3 items-center justify-between bg-zinc-100 rounded-lg  ">
									<input
										type="text"
										name=""
										placeholder="info@provistechnologies.com"
										id=""
										className="w-full text-neutral-600 placeholder:text-neutral-600 px-4 bg-transparent outline-none"
									/>
								</div>
							</div>
							<div className="mt-6 ">
								<label
									htmlFor=""
									className="text-neutral-600 text-base font-normal"
								>
									Password :
								</label>
								<div className="flex my-3 items-center justify-between bg-zinc-100 rounded-lg  ">
									<input
										type="password"
										name=""
										placeholder="info@provistechnologies.com"
										id=""
										className="w-full text-neutral-600 placeholder:text-neutral-600 px-4 bg-transparent outline-none"
									/>
								</div>
							</div>
							<a
								href="forget-password.html"
								className="mt-6 text-indigo-900 flex justify-end text-sm font-normal underline"
							>
								Forgot password?
							</a>
							<button className="bg-indigo-900 rounded-lg shadow text-center text-white text-base font-semibold w-full py-3 mt-9">
								Login now
							</button>
							<div className="relative flex items-center mt-8">
								<div className="border h-0 w-2/4 border-stone-300" />
								<div className=" text-stone-300 px-4 text-sm font-normal">
									OR
								</div>
								<div className=" border h-0 w-2/4 border-stone-300" />
							</div>
							<button className="border border-indigo-900 rounded-lg  text-center  text-indigo-900 bg-white text-base font-semibold w-full py-3 mt-9">
								Signup now
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}

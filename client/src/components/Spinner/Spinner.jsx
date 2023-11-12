export default function Spinner() {
	return (
		<div className="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2 ">
			<div className="animate-spin rounded-full bg-gradient-to-b from-white via-green-500 to-red-500 h-32 w-32"></div>
		</div>
	);
}

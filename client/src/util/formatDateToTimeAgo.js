export default function formatDateToTimeAgo(isoDateString) {
	const currentDate = new Date(); // Get the current date
	const inputDate = new Date(isoDateString); // Parse date from the ISO date string
	const timeDifference = currentDate - inputDate; // Calculate the time difference

	const seconds = Math.floor(timeDifference / 1000);  
	const minutes = Math.floor(seconds / 60);  
	const hours = Math.floor(minutes / 60);  
	const days = Math.floor(hours / 24);  
	const years = Math.floor(days / 365);  

	if (years > 0) {
		return `${years} годин${years === 1 ? 'а' : 'и'}`;
	} else if (days > 0) {
		return `${days} д${days === 1 ? 'ен' : 'ни'}`;
	} else if (hours > 0) {
		return `${hours} час${hours === 1 ? '' : 'а'}`;
	} else if (minutes > 0) {
		return `${minutes} минут${minutes === 1 ? 'а' : 'и'}`;
	} else {
		return `${seconds} секунд${seconds === 1 ? 'а' : 'и'}`;
	}
}

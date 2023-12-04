export default function commentReducer(state, action) {
	if (action.type === 'GET_ALL_COMMENTS_FOR_HERO') {
		return [...action.payload];
	} else if (action.type === 'ADD_COMMENT') {
		return [...state, action.payload];
	} else if (action.type === 'EDIT_COMMENT') {
		return state.map((comment) => comment._id === action.payload._id ? { ...comment, text: action.payload.text } : comment);
	} else if (action.type === 'DELETE_COMMENT') {
		return state.filter((comment) => comment._id !== action.payload._id);
	}

	return state;
}

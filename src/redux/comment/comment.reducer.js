import * as actionTypes from './comment.actionTypes';

const INITIAL_STATE = {
	comments: [],
};

const commentReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case actionTypes.ADD_COMMENT:
			console.log('add comment Id)', action.postId);
			console.log('add comment', action.comment);

			let comment = {
				postId: action.postId, //[action.postId]: action.comment => 2: "a comment"
				comment: action.comment,
			};
			return {
				...state,
				comments: [...state.comments, comment],
			};

		// return {
		// 	...state,
		// 	comments: { ...state.comments, [action.postId]: [action.comment] },
		// };

		// if (!state[action.postId]) {
		// 	return { ...state, [action.postId]: [action.comment] };
		// } else {
		// 	return {
		// 		...state,
		// 		[action.postId]: [...state[action.postId], action.comment],
		// 	};
		// }

		default:
			return state;
	}
};

export default commentReducer;

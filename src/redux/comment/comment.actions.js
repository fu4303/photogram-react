import * as actionTypes from './comment.actionTypes';

// Comment Post
export const addComment = (comment, postId) => {
	console.log({ comment });
	console.log({ postId });

	return {
		type: actionTypes.ADD_COMMENT,
		comment,
		postId,
	};
};

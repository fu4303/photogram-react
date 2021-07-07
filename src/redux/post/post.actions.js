import * as actionTypes from './post.actionTypes';

// Remove Post
export const removePost = (index) => {
	return {
		type: actionTypes.REMOVE_POST,
		index,
	};
};

// Add post
export const addPost = (post) => {
	return {
		type: 'ADD_POST',
		post,
	};
};

import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import Photo from './Photo';
import Comments from './Comments';

import { removePost } from '../redux/post/post.actions';

import { addComment } from '../redux/comment/comment.actions';

const SinglePost = ({ posts, params, addComment, comments, removePost }) => {
	// console.log(params.match.params.id);
	console.log(posts);
	const id = Number(params.match.params.id);

	// find post id object
	const postsIndex = posts.find((p) => p.id === id);
	console.log(postsIndex);

	if (postsIndex === undefined) {
		return <Redirect to='/' />;
	}
	// find post id
	const index = posts.findIndex((p) => p.id === id);
	console.log(index);

	// output an object of comment & postId
	const commmentMessage = comments.filter((comment) => {
		// console.log(comment);
		return comment.postId === postsIndex.id;
	});

	// useEffect(() => {
	// 	if (postsIndex === undefined) {
	// 		return <Redirect to='/' />;
	// 	} else {
	// 		return null;
	// 	}
	// 	console.log('mount it!');
	// }, [postsIndex]);

	// if (postsIndex === undefined) {
	// 	return <Redirect to='/' />;
	// }

	return (
		<div className='single-photo'>
			<Photo post={postsIndex} onRemove={removePost} index={index} />
			<Comments addComment={addComment} comments={commmentMessage} id={id} />
		</div>
	);
};

const mapStateToProps = (state) => {
	console.log(state);
	return {
		posts: state.post.posts,
		comments: state.comment.comments,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		removePost: (index) => dispatch(removePost(index)),
		addComment: (comment, postId) => dispatch(addComment(comment, postId)),
	};
};

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(SinglePost)
);

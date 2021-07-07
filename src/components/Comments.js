import React from 'react';

const Comments = ({ addComment, comments, id }) => {
	console.log({ comments });

	const handleSubmit = (event) => {
		event.preventDefault();

		const comment = event.target.elements.comment.value;
		addComment(comment, id);
		event.target.elements.comment.value = '';

		console.log('comment:' + comment, id);
	};

	const commentResult =
		comments &&
		comments.map((comment, index) => {
			console.log({ comment });
			return <p key={index}>{comment.comment}</p>;
		});
	console.log({ commentResult });

	return (
		<div className='comment'>
			{commentResult}
			<form className='comment-form' onSubmit={handleSubmit}>
				<input type='text' placeholder='Comment' name='comment' />
				<input type='submit' />
			</form>
		</div>
	);
};

export default Comments;

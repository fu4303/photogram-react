import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import { connect } from 'react-redux';

import PropTypes from 'prop-types';

const Photo = ({ post, onRemove, index, comments }) => {
	console.log(post.id);

	// if (post === undefined) {
	// 	return <Redirect to='/' />;
	// }

	return (
		<figure className='figure'>
			<Link to={`/single-post/${post.id}`}>
				<img className='photo' src={post.imageLink} alt={post.description} />
			</Link>

			<figcaption>
				<p>{post.description}</p>
			</figcaption>
			<div className='button-contianer'>
				<button
					className='remove-button'
					onClick={() => {
						onRemove(index);
					}}>
					Remove
				</button>
				<Link to={`/single-post/${post.id}`}>
					<div className='comment-count'>
						<div className='speech-bubble'>
							{/* {comments && comments ? comments[post.id].length : 0} */}
						</div>
					</div>
				</Link>
			</div>
		</figure>
	);
};

const mapStateToProps = (state) => {
	console.log(state);
	return {
		posts: state.post.posts,
		comments: state.comment.comments,
	};
};

Photo.propType = {
	// post: PropTypes.object.isRequired,
	// onRemove: PropTypes.func.isRequired,
};

export default withRouter(connect(mapStateToProps)(Photo));

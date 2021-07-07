import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Title from './Title';
import PhotoLits from './PhotoLits';
import AddPhoto from './AddPhoto';
import SinglePost from './SinglePost';

import { removePost, addPost } from '../redux/post/post.actions';

class Main extends Component {
	// removeHandle = (postRemoved) => {
	// 	console.log(postRemoved.description);
	// 	this.setState((prevState) => ({
	// 		posts: prevState.posts.filter((post) => post !== postRemoved),
	// 	}));
	// };

	// addPhotoHandle = (postSubmitted) => {
	// 	this.setState((state) => ({
	// 		posts: state.posts.concat([postSubmitted]),
	// 	}));
	// };

	// componentDidMount() {
	// 	this.props.removePost();
	// }

	// componentDidUpdate(prevProps, prevState) {
	// 	console.log(prevState.posts);
	// 	console.log(this.state);
	// }

	// this.props.dispatch(removeHandle)

	render() {
		const { posts, comments, removePost, addPost } = this.props;
		console.log('render');
		console.log(this.props);

		return (
			<>
				<h1>
					<Link to='/'>Photogram</Link>
				</h1>
				<Route
					exact
					path='/'
					render={() => (
						<>
							{/* <Title title={'Photogram'} /> */}
							<PhotoLits
								posts={posts}
								onRemove={(index) => removePost(index, comments)}
							/>
						</>
					)}
				/>
				<Route
					path='/addPhoto'
					render={({ history }) => (
						<AddPhoto
							onAddPhoto={(post) => addPost(post)}
							onHistory={history}
							// {...this.props}
						/>
					)}
				/>

				<Route
					path='/single-post/:id'
					render={(params) => (
						<SinglePost
							params={params}
							onRemove={(index) => removePost(index)}
						/>
					)}
				/>
			</>
		);
	}
}

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
		addPost: (post) => dispatch(addPost(post)),
	};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

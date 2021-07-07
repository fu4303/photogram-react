import React, { Component } from 'react';

class AddPhoto extends Component {
	// state = {
	// 	id: '',
	// 	imageLink: '',
	// 	description: '',
	// };

	handleSubmit = (event, postSubmitted) => {
		event.preventDefault();

		const imageLink = event.target.elements.link.value;
		const description = event.target.elements.description.value;
		const post = {
			id: Number(new Date().getTime()),
			description: description,
			imageLink: imageLink,
		};

		// console.log(this.state);

		this.props.onAddPhoto(post);
		this.props.onHistory.push('/');

		// this.setState({
		// 	id: '',
		// 	imageLink: '',
		// 	description: '',
		// });
	};

	// handleChange = (event, postSubmitted) => {
	// 	console.log(event.target.name);
	// 	console.log(event.target.value);

	// 	// const imageLink = event.target.elements.link.value;
	// 	// const description = event.target.elements.description.value;
	// 	// const post = {
	// 	// 	id: Number(new Date()),
	// 	// 	description: description,
	// 	// 	imageLink: imageLink,
	// 	// };
	// 	this.setState({
	// 		id: Number(new Date()),
	// 		[event.target.name]: event.target.value,
	// 		// description: description,
	// 		// [event.target.name]: event.target.value,
	// 	});
	// };

	render() {
		console.log(this.props);
		return (
			<div>
				<form className='form' onSubmit={this.handleSubmit}>
					<input
						type='text'
						// onChange={this.handleChange}
						placeholder='Link'
						name='link'
					/>
					<input
						type='text'
						// onChange={this.handleChange}
						placeholder='Description'
						name='description'
					/>
					<button>Post</button>
				</form>
			</div>
		);
	}
}

export default AddPhoto;

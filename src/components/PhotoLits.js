import React from 'react';
import { Link } from 'react-router-dom';

import Photo from './Photo';

const PhotoLits = ({ posts, onRemove }) => {
	return (
		<>
			<Link className='addIcon' to='/addPhoto' />
			<div className='photo-grid'>
				{posts && posts.length ? (
					posts
						.sort((a, b) => b.id - a.id)
						.map((post, index, history) => (
							<Photo
								key={index}
								post={post}
								onRemove={onRemove}
								index={index}
							/>
						))
				) : (
					<p>Post is empty!</p>
				)}
			</div>
		</>
	);
};


export default PhotoLits;

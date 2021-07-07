import { combineReducers } from 'redux';

import postReducer from './post/post.reducer';
import commentReducer from './comment/comment.reducer';

const rootReducer = combineReducers({
	post: postReducer,
	comment: commentReducer,
});

export default rootReducer;

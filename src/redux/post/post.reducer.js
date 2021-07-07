import * as actionTypes from './post.actionTypes';

const INITIAL_STATE = {
	posts: [
		{
			id: 0,
			description: 'beautiful landscape',
			imageLink:
				'https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg' +
				'3919321_1443393332_n.jpg',
		},
		{
			id: 1,
			description: 'Aliens???',
			imageLink:
				'https://img.purch.com/rc/640x415/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3Mi84NTEvb3JpZ2luYWwvc3BhY2V4LWlyaWRpdW00LWxhdW5jaC10YXJpcS1tYWxpay5qcGc=' +
				'08323785_735653395_n.jpg',
		},
		{
			id: 2,
			description: 'On a vacation!',
			imageLink:
				'https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg',
		},
	],
};

const postReducer = (state = INITIAL_STATE, action) => {
	// console.log(action.index);
	// console.log(action.post);

	switch (action.type) {
		case actionTypes.REMOVE_POST:
			console.log('remove post', action.index);
			return { posts: state.posts.filter((data, i) => i !== action.index) };
		case actionTypes.ADD_POST:
			console.log('add post', action.post);
			return {
				...state,
				posts: [...state.posts, action.post],
			};

		default:
			return state;
	}
};

export default postReducer;

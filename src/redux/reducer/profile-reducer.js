const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

export const addPostCreator = () => ({ type: ADD_POST });
export const updateNewPostTextCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, text: text });

const initialState = {
	posts: [
		{ id: 0, message: 'Why r u keeping silence?', likesCount: 2 },
		{ id: 1, message: 'Hey, come on', likesCount: 2 },
		{ id: 2, message: 'Please, talk with me...', likesCount: 15 },
		{ id: 3, message: 'I miss you', likesCount: 10 },
		{ id: 4, message: 'Hi, how r u?', likesCount: 14 },
		{ id: 5, message: 'Keep out, whore!!!', likesCount: 0 },
		{ id: 6, message: 'Fuck yourself, bitch!!!', likesCount: 7 },
		{ id: 7, message: 'I know everything, cyber-skum!!!', likesCount: 3 }
	],
	newPostText: ''
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			const newPost = {
				id: state.posts.length + 1,
				message: state.newPostText,
				likesCount: 0
			}
			state.posts.push(newPost);
			state.newPostText = '';
			return state;
		case UPDATE_NEW_POST_TEXT:
			state.newPostText = action.text;
			return state;
		default:
			return state;
	}
}

export default profileReducer;
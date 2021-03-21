const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

export const addPostCreator = () => ({ type: ADD_POST });
export const updateNewPostTextCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, text: text });

const profileReducer = (state, action) => {
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
			this._callSubscriber(this._state);
			return state;
		default:
			return state;
	}
}

export default profileReducer;
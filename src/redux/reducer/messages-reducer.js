const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

export const addMessageCreator = () => ({ type: 'ADD_MESSAGE' });
export const updateNewMessageTextCreator = (text) => ({ type: 'UPDATE_NEW_MESSAGE_TEXT', text: text });

const messagesReducer = (state, action) => {
	switch (action.type) {
		case ADD_MESSAGE:
			const newMessage = {
				id: state.messages.length,
				message: state.newMessageText,
				type: 'answer'
			}
			state.messages.push(newMessage);
			state.newMessageText = '';
			return state;
		case UPDATE_NEW_MESSAGE_TEXT:
			state.newMessageText = action.text;
			return state;
		default:
			return state;
	}
}

export default messagesReducer;

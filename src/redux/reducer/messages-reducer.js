const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

export const addMessageCreator = () => ({ type: 'ADD_MESSAGE' });
export const updateNewMessageTextCreator = (text) => ({ type: 'UPDATE_NEW_MESSAGE_TEXT', text: text });

const initialState = {
	title: 'Dialogs',
	dialogs: [
		{ id: '1', name: 'Arturchik' },
		{ id: '2', name: 'Anutka' },
		{ id: '3', name: 'Svetik' },
		{ id: '4', name: 'Maritka' },
		{ id: '5', name: 'Nataha' },
		{ id: '6', name: 'Zheka' }
	],
	messages: [
		{ id: '0', message: 'Hello!', type: 'question' },
		{ id: '1', message: 'How is your project?', type: 'answer' },
		{ id: '2', message: 'Where\'re you now', type: 'question' },
		{ id: '3', message: 'Yo, nigga!', type: 'answer' }
	],
	newMessageText: ''
}

const messagesReducer = (state = initialState, action) => {
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

const ADD_POST = 'ADD_POST';
const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

export const addPostActionCreator = () => ({ type: 'ADD_POST' });
export const addMessageActionCreator = () => ({ type: 'ADD_MESSAGE' });
export const updateNewMessageText = (text) => ({ type: 'UPDATE_NEW_MESSAGE_TEXT', text: text });
export const updateNewPostText = (text) => ({ type: 'UPDATE_NEW_POST_TEXT', text: text });

let store = {
	_state: {
		profilePage: {
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
		},
		messagesPage: {
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
		},
		newsPage: {
			title: 'News'
		},
		musicPage: {
			title: 'Music'
		},
		settingsPage: {
			title: 'Settings'
		},
		friendsPage: {
			title: 'Friends'
		},
		sidebar: {}
	},
	_callSubscriber() {
		console.log('empty');
	},

	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},

	dispatch(action) {
		switch (action.type) {
			case ADD_POST:
				const newPost = {
					id: this._state.profilePage.posts.length + 1,
					message: this._state.profilePage.newPostText,
					likesCount: 0
				}
				this._state.profilePage.posts.push(newPost);
				this._state.profilePage.newPostText = '';
				this._callSubscriber(this._state);
				break;
			case UPDATE_NEW_POST_TEXT:
				this._state.profilePage.newPostText = action.text;
				this._callSubscriber(this._state);
				break;
			case ADD_MESSAGE:
				const newMessage = {
					id: this._state.messagesPage.messages.length,
					message: this._state.messagesPage.newMessageText,
					type: 'answer'
				}
				this._state.messagesPage.messages.push(newMessage);
				this._state.messagesPage.newMessageText = '';
				this._callSubscriber(this._state);
				break;
			case UPDATE_NEW_MESSAGE_TEXT:
				this._state.messagesPage.newMessageText = action.text;
				this._callSubscriber(this._state);
				break;
		}
	}
}

export default store;
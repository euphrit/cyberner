import { combineReducers, createStore } from "redux";
import messagesReducer from "./reducer/messages-reducer";
import newsReducer from "./reducer/news-reducer";
import profileReducer from "./reducer/profile-reducer";
import musicReducer from "./reducer/music-reducer";
import settingsReducer from "./reducer/settings-reducer";
import friendsReducer from "./reducer/friends-reducer";
import sidebarReducer from './reducer/sidebar-reducer';

let reducers = combineReducers({
	profilePage: profileReducer,
	messagesPage: messagesReducer,
	newsPage: newsReducer,
	musicPage: musicReducer,
	settingsPage: settingsReducer,
	friendsPage: friendsReducer,
	sidebar: sidebarReducer
})

let store = createStore(reducers);

export default store;
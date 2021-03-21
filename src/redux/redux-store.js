import { combineReducers, createStore } from "redux";
import messagesReducer from "./reducer/messages-reducer";
import newsReducer from "./reducer/news-reducer";
import profileReducer from "./reducer/profile-reducer";
import musicReducer from "./reducer/music-reducer";


let reducers = combineReducers({
	profilePage: profileReducer,
	messagesPage: messagesReducer,
	newsPage: newsReducer,
	musicPage: musicReducer,

})

let store = createStore();


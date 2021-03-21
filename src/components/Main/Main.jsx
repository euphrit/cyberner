import React from 'react';
import style from './Main.module.css';
import { Route } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import Profile from '../Profile/Profile';
import Messages from '../Messages/Messages';
import News from '../News/News';
import Music from '../Music/Music';
import Settings from '../Settings/Settings';
import Friends from '../Friends/Friends';

const Main = (props) => {
	return (
		<main>
			<div className={style.content}>
				<Sidebar />
				<div className={style.content__grid}>
					<Route
						path='/profile'
						render={() => <Profile
							profilePage={props.state.profilePage}
							addPost={props.addPost}
							updateNewPostText={props.updateNewPostText} />} />
					<Route
						path='/messages'
						render={() => <Messages
							state={props.state.messagesPage}
							addMessage={props.addMessage}
							updateNewMessageText={props.updateNewMessageText} />} />
					<Route
						path='/news'
						render={() => <News state={props.state.newsPage} />} />
					<Route
						path='/music'
						render={() => <Music state={props.state.musicPage} />} />
					<Route
						path='/settings'
						render={() => <Settings state={props.state.settingsPage} />} />
					<Route
						path='/friends'
						render={() => <Friends state={props.state.friendsPage} />} />
				</div>
			</div>
			<Footer />
		</main>
	);
}

export default Main;
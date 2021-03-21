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
							dispatch={props.dispatch} />} />
					<Route
						path='/messages'
						render={() => <Messages
							messagePage={props.state.messagesPage}
							dispatch={props.dispatch} />} />
					<Route
						path='/news'
						render={() => <News newsPage={props.state.newsPage} />} />
					<Route
						path='/music'
						render={() => <Music musicPage={props.state.musicPage} />} />
					<Route
						path='/settings'
						render={() => <Settings settingsPage={props.state.settingsPage} />} />
					<Route
						path='/friends'
						render={() => <Friends friendsPage={props.state.friendsPage} />} />
				</div>
			</div>
			<Footer />
		</main>
	);
}

export default Main;
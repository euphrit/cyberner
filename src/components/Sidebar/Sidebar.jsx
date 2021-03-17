import React from 'react';
import { NavLink } from 'react-router-dom';
import FriendsLine from '../Friends/FriendsLine/FriendsLine';
import style from './Sidebar.module.css';

const Sidebar = () => {
	return (
		<aside className={style.sidebar}>
			<nav className={style.menu}>
				<ul>
					<li>
						<NavLink to='/profile' activeClassName={style.active}>Profile</NavLink>
					</li>
					<li>
						<NavLink to='/messages' activeClassName={style.active}>Messages</NavLink>
					</li>
					<li>
						<NavLink to='/news' activeClassName={style.active}>News</NavLink>
					</li>
					<li>
						<NavLink to='/music' activeClassName={style.active}>Music</NavLink>
					</li>
					<li className={style.settings}>
						<NavLink to='/settings' activeClassName={style.active}>Settings</NavLink>
					</li>
					<li className={style.friends}>
						<NavLink to='/friends' activeClassName={style.active}>Friends</NavLink>
						<FriendsLine />
					</li>
				</ul>
			</nav>
		</aside>
	);
}

export default Sidebar;
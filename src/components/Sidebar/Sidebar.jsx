import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Sidebar.module.css';

const Sidebar = () => {
	return (
		<aside className={style.sidebar}>
			<nav className={style.menu}>
				<ul>
					<li>
						<NavLink to='/sectionprofile' activeClassName={style.active}>Profile</NavLink>
					</li>
					<li>
						<NavLink to='/sectionmessages' activeClassName={style.active}>Messages</NavLink>
					</li>
					<li>
						<NavLink to='/sectionnews' activeClassName={style.active}>News</NavLink>
					</li>
					<li>
						<NavLink to='/sectionmusic' activeClassName={style.active}>Music</NavLink>
					</li>
					<li className={style.settings}>
						<NavLink to='/sectionsettings' activeClassName={style.active}>Settings</NavLink>
					</li>
				</ul>
			</nav>
		</aside>
	);
}

export default Sidebar;
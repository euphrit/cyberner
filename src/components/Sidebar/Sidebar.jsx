import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Sidebar.module.css';

const Sidebar = () => {
	return (
		<aside className={style.sidebar}>
			<nav className={style.menu}>
				<ul className={style.list}>
					<li className={style.item}>
						<NavLink to='/sectionprofile' activeClassName={style.active}>Profile</NavLink>
					</li>
					<li className={style.item}>
						<NavLink to='/sectionmessages' activeClassName={style.active}>Messages</NavLink>
					</li>
					<li className={style.item}>
						<NavLink to='/sectionnews' activeClassName={style.active}>News</NavLink>
					</li>
					<li className={style.item}>
						<NavLink to='/sectionmusic' activeClassName={style.active}>Music</NavLink>
					</li>
					<li className={`${style.item} ${style.settings}`}>
						<NavLink to='/sectionsettings' activeClassName={style.active}>Settings</NavLink>
					</li>
				</ul>
			</nav>
		</aside>
	);
}

export default Sidebar;
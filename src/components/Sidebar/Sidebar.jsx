import React from 'react';
import style from './Sidebar.module.css';

const Sidebar = () => {
	return (
		<aside className={style.sidebar}>
			<nav className={style.menu}>
				<ul className={style.list}>
					<li className={`${style.item} ${style.active}`}><a href='#'>Profile</a></li>
					<li className={style.item}><a href='#'>Messages</a></li>
					<li className={style.item}><a href='#'>News</a></li>
					<li className={style.item}><a href='#'>Music</a></li>
					<li className={`${style.item} ${style.settings}`}><a href='#'>Settings</a></li>
				</ul>
			</nav>
		</aside>
	);
}

export default Sidebar;
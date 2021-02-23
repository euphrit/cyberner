import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
	return (
		<aside className='sidebar'>
			<nav className='sidebar__menu menu'>
				<ul className='menu__list'>
					<li className='menu__item'><a href='#'>Profile</a></li>
					<li className='menu__item'><a href='#'>Messages</a></li>
					<li className='menu__item'><a href='#'>News</a></li>
					<li className='menu__item'><a href='#'>Music</a></li>
					<li className='menu__item settings'><a href='#'>Settings</a></li>
				</ul>
			</nav>
		</aside>
	);
}

export default Sidebar;
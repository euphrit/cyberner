import React from 'react';
import style from './Header.module.css';

const Header = () => {
	return (
		<header className={style.header}>
			<div className={style.logo}>
				<a href='#'><img src="images/cyber.png" alt='logo' /></a>
			</div>
		</header>
	);
}

export default Header;
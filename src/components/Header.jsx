import React from 'react';
import './Header.css';

const Header = () => {
	return (
		<header className='header'>
			<div className='logo'>
				<a className='logo__link' href='#'><img src='cyber.png' alt='logo' /></a>
			</div>
		</header>
	);
}

export default Header;
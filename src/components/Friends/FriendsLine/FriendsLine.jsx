import React from 'react';
import style from './FriendsLine.module.css';

const FriendsLine = () => {
	return (
		<div className={style.flexLine}>
			<div className={style.friendAvatar}>
				<img src="images/eva.png" alt="avatar" />
			</div>
			<div className={style.friendAvatar}>
				<img src="images/wally.png" alt="avatar" />
			</div>
			<div className={style.friendAvatar}>
				<img src="images/iron_man.png" alt="avatar" />
			</div>
		</div>
	);
}

export default FriendsLine;
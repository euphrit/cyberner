import React from 'react';
import style from './FriendAvatar.module.css';

const FriendAvatar = (props) => {

	return (
		<div className={style.friendAvatar}>
			<img src={`images/${props.avatar}`} alt="avatar" />
		</div>
	);
}

export default FriendAvatar;
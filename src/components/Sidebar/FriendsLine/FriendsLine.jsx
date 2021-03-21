import React from 'react';
import style from './FriendsLine.module.css';
import FriendAvatar from './FriendAvatar/FriendAvatar';


const FriendsLine = (props) => {

	let avatars =
		props.avatar.map(f => <FriendAvatar avatar={f} />);

	return (
		<div className={style.flexLine}>
			{avatars}
		</div>
	);
}

export default FriendsLine;
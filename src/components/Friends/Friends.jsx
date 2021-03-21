import React from 'react';
import PageTitle from '../PageTitle/PageTitle';
import style from './Friends.module.css';

const Friends = (props) => {
	return (
		<div>
			<PageTitle title={props.friendsPage.title} />
		</div>
	);
}

export default Friends;
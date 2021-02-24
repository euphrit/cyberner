import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
	return (
		<div className={style.posts}>
			<Post message='Why r u keeping silence?' count='2' />
			<Post message='Hey, come on' count='2' />
			<Post message='Please, talk with me...' count='15' />
			<Post message='I miss you' count='10' />
			<Post message='Hi, how r u?' count='14' />
			<Post message='Keep out, whore!!!' count='0' />
			<Post message='Fuck yourself, bitch!!!' count='7' />
			<Post message='I know everything, cyber-skum!!!' count='3' />
		</div>
	);
}

export default MyPosts;
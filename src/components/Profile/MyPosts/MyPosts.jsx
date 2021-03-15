import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

	let posts = [
		{ id: 0, message: 'Why r u keeping silence?', likesCount: 2 },
		{ id: 1, message: 'Hey, come on', likesCount: 2 },
		{ id: 2, message: 'Please, talk with me...', likesCount: 15 },
		{ id: 3, message: 'I miss you', likesCount: 10 },
		{ id: 4, message: 'Hi, how r u?', likesCount: 14 },
		{ id: 5, message: 'Keep out, whore!!!', likesCount: 0 },
		{ id: 6, message: 'Fuck yourself, bitch!!!', likesCount: 7 },
		{ id: 7, message: 'I know everything, cyber-skum!!!', likesCount: 3 }
	];

	let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

	return (
		<div className={style.posts}>
			{postsElements}
		</div>
	);
}

export default MyPosts;
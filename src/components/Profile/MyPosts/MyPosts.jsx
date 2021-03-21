import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
	let postsElements =
		props.posts.map(p => <Post
			message={p.message}
			likesCount={p.likesCount} />);

	return (
		<div className={style.posts}>
			{postsElements}
		</div>
	);
}

export default MyPosts;
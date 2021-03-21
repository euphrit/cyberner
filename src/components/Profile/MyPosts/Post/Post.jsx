import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
	return (
		<div className={style.item}>
			<div className={style.flex}>
				<div className={style.mini}>
					<img src='images/avatar.png' />
				</div>
				<p>{props.message}</p>
			</div>

			<div className={style.like}>
				<span className={style.icon}>Like</span>
				<span className={style.count}>{props.likesCount}</span>
			</div>
		</div>
	);
}

export default Post;
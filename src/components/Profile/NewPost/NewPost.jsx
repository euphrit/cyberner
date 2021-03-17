import React from 'react';
import SendMessage from '../../SendMessage/SendMessage';
import style from './../Profile.module.css';


const NewPost = () => {
	return (
		<div className={style.newpost}>
			<p className={style.title}>
				Написать новое сообщение
			</p>
			<SendMessage />
		</div>
	);
}

export default NewPost;
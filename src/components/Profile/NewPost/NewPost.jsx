import React from 'react';
import style from './../Profile.module.css';


const NewPost = () => {
	return (
		<div className={style.newpost}>
			<p className={style.title}>
				Написать новое сообщение
				</p>
			<textarea rows="5" cols="113"></textarea>
			<p className={style.button}>
				<button>Отправить</button>
			</p>
		</div>
	);
}

export default NewPost;
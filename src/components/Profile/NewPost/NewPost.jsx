import React from 'react';
import SendPost from './SendPost/SendPost';
import style from './../Profile.module.css';


const NewPost = (props) => {
	debugger;
	return (
		<div className={style.newpost}>
			<p className={style.title}>
				Написать новое сообщение
			</p>

			<SendPost
				addPost={props.addPost}
				updateNewPostText={props.updateNewPostText}
				newPostText={props.newPostText} />
		</div>
	);
}

export default NewPost;
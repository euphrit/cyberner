import React from 'react';
import { addPostCreator, updateNewPostTextCreator } from '../../../../redux/reducer/profile-reducer';
import style from './SendPost.module.css';


const SendPost = (props) => {

	let addNewPost = () => props.dispatch(addPostCreator());
	let onPostChange = (e) => props.dispatch(updateNewPostTextCreator(e.target.value));

	return (
		<div className={style.sendPostWrapper}>
			<textarea rows='5' cols='113' onChange={onPostChange} value={props.newPostText}></textarea>
			<button onClick={addNewPost}>Отправить</button>
		</div>
	);
}

export default SendPost;
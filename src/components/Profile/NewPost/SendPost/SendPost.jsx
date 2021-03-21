import React from 'react';
import { addPostActionCreator, updateNewPostText } from '../../../../redux/state/state';
import style from './SendPost.module.css';


const SendPost = (props) => {

	let addNewPost = () => props.dispatch(addPostActionCreator());
	let onPostChange = (e) => props.dispatch(updateNewPostText(e.target.value));

	return (
		<div className={style.sendPostWrapper}>
			<textarea rows='5' cols='113' onChange={onPostChange} value={props.newPostText}></textarea>
			<button onClick={addNewPost}>Отправить</button>
		</div>
	);
}

export default SendPost;
import React from 'react';
import style from './SendPost.module.css';

const SendPost = (props) => {

	let newPostElement = React.createRef();
	let addNewPost = () => {
		props.addPost();
	}

	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.updateNewPostText(text);
	}

	return (
		<div className={style.sendPostWrapper}>
			<textarea
				ref={newPostElement} rows='5' cols='113' onChange={onPostChange} value={props.newPostText}></textarea>
			<button onClick={addNewPost}>Отправить</button>
		</div>
	);
}

export default SendPost;
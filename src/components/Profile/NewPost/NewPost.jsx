import React from 'react';
import SendPost from './SendPost/SendPost';
import style from './../Profile.module.css';


const NewPost = (props) => {
	debugger;
	return (
		<div className={style.newpost}>
			<SendPost
				newPostText={props.newPostText}
				dispatch={props.dispatch} />
		</div>
	);
}

export default NewPost;
import React from 'react';
import { addMessageActionCreator, updateNewMessageText } from '../../../redux/state/state';
import style from './SendMessage.module.css';

const SendMessage = (props) => {

	const addNewMessage = () => props.dispatch(addMessageActionCreator());
	const onMessageChange = (e) => props.dispatch(updateNewMessageText(e.target.value));

	return (
		<div className={style.sendMessageWrapper}>
			<textarea rows='3' cols='80' onChange={onMessageChange} value={props.newMessageText}></textarea>
			<button onClick={addNewMessage}>Отправить</button>
		</div>
	);
}

export default SendMessage;
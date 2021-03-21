import React from 'react';
import { addMessageCreator, updateNewMessageTextCreator } from '../../../redux/reducer/messages-reducer';
import style from './SendMessage.module.css';

const SendMessage = (props) => {

	const addNewMessage = () => props.dispatch(addMessageCreator());
	const onMessageChange = (e) => props.dispatch(updateNewMessageTextCreator(e.target.value));

	return (
		<div className={style.sendMessageWrapper}>
			<textarea rows='3' cols='80' onChange={onMessageChange} placeholder="Enter your message here" value={props.newMessageText}></textarea>
			<button onClick={addNewMessage}>Отправить</button>
		</div>
	);
}

export default SendMessage;
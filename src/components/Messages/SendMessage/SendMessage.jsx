import React from 'react';
import { addMessageActionCreator, updateNewMessageText } from '../../../redux/state/state';
import style from './SendMessage.module.css';

const SendMessage = (props) => {

	let newMessageElement = React.createRef();

	const addNewMessage = () => props.dispatch(addMessageActionCreator());
	const onMessageChange = () => props.dispatch(updateNewMessageText(newMessageElement.current.value));

	return (
		<div className={style.sendMessageWrapper}>
			<textarea ref={newMessageElement} rows='3' cols='80'
				onChange={onMessageChange} value={props.newMessageText}></textarea>
			<button onClick={addNewMessage}>Отправить</button>
		</div>
	);
}

export default SendMessage;
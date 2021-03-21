import React from 'react';
import style from './SendMessage.module.css';

const SendMessage = (props) => {

	let newMessageElement = React.createRef();

	let addNewMessage = () => {
		props.addMessage();
	}

	let onMessageChange = () => {
		let text = newMessageElement.current.value;
		props.updateNewMessageText(text);
	}

	return (
		<div className={style.sendMessageWrapper}>
			<textarea
				ref={newMessageElement} rows='3' cols='80' onChange={onMessageChange} value={props.newMessageText}></textarea>
			<button onClick={addNewMessage}>Отправить</button>
		</div>
	);
}

export default SendMessage;
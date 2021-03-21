import React from 'react';
import PageTitle from '../PageTitle/PageTitle';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import SendMessage from './SendMessage/SendMessage';
import style from './Messages.module.css';

const Messages = (props) => {

	let dialogsElements =
		props.messagePage.dialogs.map(d => <Dialog id={d.id} name={d.name} />);
	let messagesElements =
		props.messagePage.messages.map(m => <Message message={m.message} type={m.type} />);

	return (
		<div>
			<PageTitle title={props.messagePage.title} />
			<div className={style.flexWrapper}>
				<div className={style.dialogs}>
					{dialogsElements}
				</div>
				<div className={style.messages}>
					{messagesElements}
				</div>
			</div>
			<SendMessage
				newMessageText={props.messagePage.newMessageText}
				dispatch={props.dispatch} />
		</div >
	);
}

export default Messages;
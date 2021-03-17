import React from 'react';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import style from './Messages.module.css';

const Messages = (props) => {

	let dialogsElements =
		props.state.dialogs.map(d => <Dialog id={d.id} name={d.name} />);
	let messagesElements =
		props.state.messages.map(m => <Message message={m.message} />);

	return (
		<div>
			<div className={style.title}>
				Dialogs
			</div>
			<div className={style.flexWrapper}>
				<div className={style.dialogs}>
					{dialogsElements}
				</div>

				<div className={style.messages}>
					{messagesElements}
				</div>
			</div>
		</div >
	);
}

export default Messages;
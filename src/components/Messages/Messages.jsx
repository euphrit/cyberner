import React from 'react';
import { NavLink } from 'react-router-dom';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message'
import style from './Messages.module.css';

const Messages = () => {

	let dialogs = [
		{ id: '1', name: 'Arturchik' },
		{ id: '2', name: 'Anutka' },
		{ id: '3', name: 'Svetik' },
		{ id: '4', name: 'Maritka' },
		{ id: '5', name: 'Nataha' },
		{ id: '6', name: 'Zheka' }
	];

	let messages = [
		{ id: '0', message: 'Hello!' },
		{ id: '1', message: 'How is your project?' },
		{ id: '2', message: 'Where\'re you now' },
		{ id: '3', message: 'Yo, nigga!' }
	];

	let dialogsElements = dialogs.map(d => <Dialog name={d.name} id={d.id} />);
	let messagesElements = messages.map(m => <Message message={m.message} />);

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
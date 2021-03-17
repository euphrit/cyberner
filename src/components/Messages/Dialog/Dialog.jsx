import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Dialog.module.css';

const Dialog = (props) => {

	return (
		<div className={style.dialogsItem}>
			<div className={style.dialogIcon}>
				<img src="images/r2d2.png" alt="avatar" />
			</div>
			<div className={style.dialogLink}>
				<NavLink to={'/messages/' + props.id} activeClassName={style.activeDialog} >{props.name}</NavLink>
			</div>
			<div className={style.lastMessage}>
				Последнее сообщение...
			</div>
			<div className={style.netStatus}>
				<span></span>
			</div>
			<div className={style.readStatus}>
				<span></span>
			</div>
		</div>
	);
}

export default Dialog;
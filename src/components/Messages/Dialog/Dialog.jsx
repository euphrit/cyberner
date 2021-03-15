import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './../Messages.module.css';

const Dialog = (props) => {

	return (
		<div className={style.dialogs__item}>
			<NavLink to={'/messages/' + props.id} activeClassName={style.activeDialog} >{props.name}</NavLink>
		</div>
	);
}

export default Dialog;
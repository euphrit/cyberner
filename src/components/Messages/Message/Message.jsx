import React from 'react';
import style from './../Messages.module.css';

const Message = (props) => {

	return <div className={style.messages__item}>{props.message}</div>;
}

export default Message;
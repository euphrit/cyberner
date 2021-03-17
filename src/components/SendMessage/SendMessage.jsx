import React from 'react';
import style from './SendMessage.module.css';

const SendMessage = () => {
	return (
		<div>
			<textarea rows="5" cols="113"></textarea>
			<p className={style.button}>
				<button>Отправить</button>
			</p>
		</div>
	);
}

export default SendMessage;
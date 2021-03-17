import React from 'react';
import style from './Message.module.css';

const Message = (props) => {

	return (
		<div className={style[props.type]}>
			<div className={style.messageIcon}>
				<img src="images/iron_man.png" alt="avatar" />
			</div>
			<div className={style.message}>
				<div className={style.messageText}>
					<div className={style.innerBox}>
						<p>{props.message}</p>
					</div>
				</div>
				<div className={style.messageTime}>
					время
				</div>
			</div>
		</div>
	);
}

export default Message;
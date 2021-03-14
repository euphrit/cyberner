import React from 'react';
import s from './SectionMessages.module.css';

const SectionMessages = () => {
	return (
		<div>
			<div className={s.title}>
				Dialogs
			</div>
			<div className={s.flexWrapper}>
				<div className={s.dialogs}>
					<div className={`${s.dialogs__items} ${s.dialog}`}>
						<div className={s.dialog__item}>
							Arturchik
				</div>
						<div className={s.dialog__item}>
							Anutka
				</div>
						<div className={s.dialog__item}>
							Svetik
				</div>
						<div className={s.dialog__item}>
							Maritka
				</div>
						<div className={s.dialog__item}>
							Nataha
				</div>
						<div className={s.dialog__item}>
							Zheka
				</div>
					</div>
				</div>

				<div className={s.messages}>
					<div className={`${s.messages__items} ${s.message}`}>
						<div className={s.message__item}>
							Hello!
					</div>
						<div className={s.message__item}>
							How is your project?
					</div>
						<div className={s.message__item}
						>Where're you now?
					</div>
						<div className={s.message__item}>
							Yo, nigga!
					</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SectionMessages;
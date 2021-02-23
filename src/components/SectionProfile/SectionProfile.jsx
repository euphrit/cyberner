import React from 'react';
import style from './SectionProfile.module.css';

const SectionProfile = () => {
	return (
		<div className={style.section}>
			<div className={style.image}></div>
			<div className={style.person}>
				ava + person-data
            </div>
			<div className={style.newpost}>
				My new post
				<div className={style.textbox}>
					Type message here
				</div>
			</div>
			<div className={style.sentpost}>
				<div className={style.item}>sentpost1</div>
				<div className={style.item}>sentpost2</div>
			</div>
		</div>
	);
}

export default SectionProfile;
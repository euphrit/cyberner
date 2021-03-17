import React from 'react';
import style from './../Profile.module.css';

const Person = () => {
	return (
		<div className={style.person}>
			<div className={style.ava}>
				<img src="images/avatar.png" alt='avatar' />
			</div>
			<div className={style.data}>
				<p className={style.name}>Василий Коломиец</p>
				<p className={style.age}>34 года</p>
				<p className={style.edu}>БГУИР, 2008</p>
				<p className={style.place}>Минск, Беларусь</p>
				<p className={style.hobbies}>Программирование, печешки</p>
			</div>
		</div>
	);
}

export default Person;
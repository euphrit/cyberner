import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import style from './SectionProfile.module.css';

const SectionProfile = () => {
	return (
		<div className={style.section}>
			<div className={style.image}></div>
			<div className={style.person}>
				<div className={style.ava}>
					<img src="avatar.png" alt='avatar' />
				</div>
				<div className={style.data}>
					<p className={style.name}>Василий Коломиец</p>
					<p className={style.age}>34 года</p>
					<p className={style.edu}>БГУИР, 2008</p>
					<p className={style.place}>Минск, Беларусь</p>
					<p className={style.hobbies}>Программирование, печешки</p>
				</div>
			</div>
			<div className={style.newpost}>
				<p className={style.title}>
					Написать новое сообщение
				</p>
				<textarea rows="5" cols="113"></textarea>
				<p className={style.button}>
					<button>Отправить</button>
				</p>
			</div>
			<MyPosts />
		</div >
	);
}

export default SectionProfile;
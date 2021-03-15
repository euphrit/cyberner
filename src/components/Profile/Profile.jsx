import React from 'react';
import Person from './Person/Person';
import NewPost from './NewPost/NewPost';
import MyPosts from './MyPosts/MyPosts';
import style from './Profile.module.css';

const Profile = () => {
	return (
		<div>
			<div className={style.image}></div>
			<Person />
			<NewPost />
			<MyPosts />
		</div >
	);
}

export default Profile;
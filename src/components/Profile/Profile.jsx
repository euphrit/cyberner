import React from 'react';
import Person from './Person/Person';
import NewPost from './NewPost/NewPost';
import MyPosts from './MyPosts/MyPosts';
import style from './Profile.module.css';

const Profile = (props) => {

	return (
		<div>
			<div className={style.image}></div>
			<Person />
			<NewPost />
			<MyPosts posts={props.state.posts} />
		</div >
	);
}

export default Profile;
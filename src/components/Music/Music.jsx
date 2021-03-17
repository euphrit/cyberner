import React from 'react';
import PageTitle from '../PageTitle/PageTitle';
import style from './Music.module.css';

const Music = (props) => {
	return (
		<div>
			<PageTitle title={props.state.title} />
		</div>
	);
}

export default Music;
import React from 'react';
import PageTitle from '../PageTitle/PageTitle';
import style from './News.module.css';

const News = (props) => {
	return (
		<div>
			<PageTitle title={props.state.title} />
		</div>
	);
}

export default News;
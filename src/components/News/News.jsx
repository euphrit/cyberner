import React from 'react';
import PageTitle from '../PageTitle/PageTitle';
import style from './News.module.css';

const News = (props) => {
	return (
		<div>
			<PageTitle title={props.newsPage.title} />
		</div>
	);
}

export default News;
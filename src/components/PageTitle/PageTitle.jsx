import React from 'react';
import style from './PageTitle.module.css';

const PageTitle = (props) => {
	return (
		<div className={style.title}>
			{props.title}
		</div>
	);
}

export default PageTitle;
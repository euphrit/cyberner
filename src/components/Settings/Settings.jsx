import React from 'react';
import PageTitle from '../PageTitle/PageTitle';
import style from './Settings.module.css';

const Settings = (props) => {
	return (
		<div>
			<PageTitle title={props.settingsPage.title} />
		</div>
	);
}

export default Settings;
import React from 'react';
import './SectionProfile.css';

const SectionProfile = () => {
	return (
		<div className='section'>
			<div className='section__image'></div>
			<div className='secton__person'>
				ava + person-data
            </div>
			<div className='section__newpost newpost'>
				My new post
				<div className='newpost__input'>
					Type message here
				</div>
			</div>
			<div className='section__sentpost sentpost'>
				<div>sentpost1</div>
				<div>sentpost2</div>
			</div>
		</div>
	);
}

export default SectionProfile;
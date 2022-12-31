import React from 'react';


//React Router Dom
import { Outlet } from 'react-router-dom';


//Components
import AudioPlayer	from './AudioPlayer';
import Header				from './Header';


//Main component content
const Template = (): JSX.Element => {
	//Main component render
	return (
		<>
			<Header />
			<Outlet />
			<AudioPlayer />
		</>
	);
};


export default Template; //Export main component

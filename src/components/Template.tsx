import React, { useEffect } from 'react';



//React Router Dom
import { Outlet } from 'react-router-dom';


//Utils
import { initLocalCurrentSong } from '../utils/localStorageUtils';

//Components
import AudioPlayer	from './AudioPlayer';
import Header				from './Header';


//Main component content
const Template = (): JSX.Element => {

	useEffect( () => {
		initLocalCurrentSong();
	}, [] );

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

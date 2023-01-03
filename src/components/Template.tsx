import React, { useEffect, useContext } from 'react';


//Context
import CurrentSongContext from '../contexts/CurrentSong/CurrentSongContext';


//React Router Dom
import { Outlet } from 'react-router-dom';


//Utils
import { initLocalCurrentSongId } from '../utils/localStorageUtils';


//Components
import AudioPlayer	from './AudioPlayer';
import Header				from './Header';


//Main component content
const Template = (): JSX.Element => {

	const currentSong = useContext(CurrentSongContext);

	useEffect( () => {
		initLocalCurrentSongId();
	}, [] );

	//Main component render
	return (
		<>
			<Header />
			<Outlet />
			{/* If there is no song playing do not show AduiPlayer */}
			{currentSong?.author?.name && (
				<AudioPlayer />
			)}
		</>
	);
};


export default Template; //Export main component

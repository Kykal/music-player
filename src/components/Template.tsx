import React, { useEffect, useContext } from 'react';



//React Router Dom
import { Outlet } from 'react-router-dom';


//Context
import CurrentSongContext from '../contexts/current-song-context';


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
		console.log(currentSong);
	}, [] );

	//Main component render
	return (
		<>
			<Header />
			<Outlet />
			{/* If there is no song playing do not show AduiPlayer */}
			{ currentSong.id !== null ?? (
				<AudioPlayer />
			) }
		</>
	);
};


export default Template; //Export main component

import React, { useState, useEffect } from 'react';


//Constants
import { CURRENT_SONG_INIT } from '../../constants';


//Context
import CurrentSongContext from './CurrentSongContext';
import getSongById from '../../utils/getSongById';


//Main component content
const CurrentSongContextProvider = (props: { children: JSX.Element | JSX.Element[] }): JSX.Element => {

	const [ currentSong, setCurrentSong ] = useState({...CURRENT_SONG_INIT});



	useEffect( () => {
		( async () => {
			const song = await getSongById(currentSong.id!);

			setCurrentSong({...song});
		} )()
	}, [currentSong.id] );

	//Update id property
	const setCurrentSongId = (id: string) => {
		setCurrentSong({
			...currentSong,
			id: id,
		});
	};

	//Main component render
	return (
		<CurrentSongContext.Provider
			value={{
				...currentSong,
				setCurrentSongId: setCurrentSongId,
			}}
		>
			{props.children}
		</CurrentSongContext.Provider>
	);
};


export default CurrentSongContextProvider; //Export main component

import React, { createContext, useState, useEffect } from 'react';

//Constants
import { CURRENT_SONG_INIT } from '../constants';
import ISong from '../interfaces/ISong';
import getSongById from '../utils/getSongById';



const CurrentSongContext = createContext({
	...CURRENT_SONG_INIT,
	setCurrentSongId: (id: string) => {},
});


export const CurrentSongContextProvider = (props: any): JSX.Element => {

	const [ currentSong, setCurrentSong ] = useState<ISong>(CURRENT_SONG_INIT);

	//If id updates update whole data
	useEffect( () => {
		if( currentSong.id.length === 0 )
			return;

		const fetch = async () => {
			const song = await getSongById(currentSong.id);

			setCurrentSong({
				...song
			});
		}
		fetch();
	}, [currentSong.id] );


	useEffect( () => {
		if( currentSong.name.length === 0 )
			return
		
	}, [ currentSong.name ] );

	//Set new current song
	const setCurrentSongIdHandler = (id: string): void => {
		setCurrentSong({
			...CURRENT_SONG_INIT,
			id: id,
		});
	};


	return (
		<CurrentSongContext.Provider
			value={{
				...CURRENT_SONG_INIT,
				setCurrentSongId: setCurrentSongIdHandler,
			}}
		>
			{props.children}
		</CurrentSongContext.Provider>
	);
}


export default CurrentSongContext;

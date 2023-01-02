import React, { createContext, useState, useEffect } from 'react';

//Constants
import { CURRENT_SONG_INIT } from '../constants';
import ICurrentSong from '../interfaces/ICurrentSong';



const CurrentSongContext = createContext({
	...CURRENT_SONG_INIT,
	setCurrentSongId: (id: string) => {},
});


export const CurrentSongContextProvider = (props: any): JSX.Element => {

	const [ currentSong, setCurrentSong ] = useState<ICurrentSong>(CURRENT_SONG_INIT);

	useEffect( () => {
		
	}, [currentSong] );

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

import { LOCAL_CURRENT_SONG_INIT } from "../constants";
import ICurrentSong from "../interfaces/ICurrentSong";
import ILocalCurrentSong from "../interfaces/ILocalCurrentSong";

/**
 * Prepares localStorage to save data locally.
 */
export const initLocalCurrentSong = (): void => {
	if( getLocalCurrentSong() != null )
		return;

	setLocalCurrentSong(LOCAL_CURRENT_SONG_INIT);
}


/**
 * Try to get current song id.
 * @returns song id. or null
 */
export const getLocalCurrentSong = (): ICurrentSong | null => {
	return JSON.parse(localStorage.getItem('currentSong')!) ?? null;
}

/**
 * Set current song id. in localStorage to save locally.
 * @param songId 
 */
export const setLocalCurrentSong = (currentSong: ILocalCurrentSong): void => {
	localStorage.setItem('currentSong', JSON.stringify(currentSong) );
}

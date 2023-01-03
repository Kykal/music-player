import { LOCAL_CURRENT_SONG_ID_INIT } from "../constants";
import ISong from "../interfaces/ISong";

/**
 * Prepares localStorage to save data locally.
 */
export const initLocalCurrentSongId = (): void => {
	if( getLocalCurrentSongId() != null )
		return;

	setLocalCurrentSongId(LOCAL_CURRENT_SONG_ID_INIT);
}


/**
 * Try to get current song id.
 * @returns song id. or null
 */
export const getLocalCurrentSongId = (): string | null => {
	return localStorage.getItem('currentSongId') ?? null;
}


/**
 * Set current song id. in localStorage to save locally.
 * @param songId 
 */
export const setLocalCurrentSongId = (currentSongId: string): void => {
	localStorage.setItem('currentSongId', currentSongId );
}

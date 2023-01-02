import { LOCAL_CURRENT_SONG_INIT } from "../constants";
import ICurrentSong from "../interfaces/ICurrentSong";

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
export const getLocalCurrentSong = (): string | null => {
	return localStorage.getItem('currentSong') ?? null;
}


/**
 * Set current song id. in localStorage to save locally.
 * @param songId 
 */
export const setLocalCurrentSong = (currentSongId: string): void => {
	localStorage.setItem('currentSong', currentSongId );
}

import React, { createContext } from 'react';
import { CURRENT_SONG_INIT } from '../../constants';

export default createContext({
	...CURRENT_SONG_INIT,
	setCurrentSongId: (id: string) => {},
});

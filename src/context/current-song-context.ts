import React, { createContext, Context } from 'react';

//Constants
import { CURRENT_SONG_INIT } from '../constants';
import ICurrentSong from '../interfaces/ICurrentSong';


const CurrentSongContext: Context<ICurrentSong> = createContext(CURRENT_SONG_INIT);


export default CurrentSongContext;

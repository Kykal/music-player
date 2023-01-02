import ICurrentSong from "./interfaces/ICurrentSong";



export const CURRENT_SONG_INIT: ICurrentSong = {
	id: '',
	url: '',
	thumbnailUrl: '',
	name: '',
	author: {
		name: '',
		url: '',
	},
}

export const LOCAL_CURRENT_SONG_INIT: string = '';

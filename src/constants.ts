import ISong from "./interfaces/ISong";

export const DUMMY_THUMBNAIL_URL = 'https://dummyimage.com/200x200/000/fff.png';

export const CURRENT_SONG_INIT: ISong = {
	id: '',
	url: '',
	thumbnailUrl: '',
	name: '',
	author: {
		name: '',
		url: '',
	},
}

export const LOCAL_CURRENT_SONG_ID_INIT: string = '';

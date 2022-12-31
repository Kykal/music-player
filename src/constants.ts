import ICurrentSong from "./interfaces/ICurrentSong";
import ILocalCurrentSong from "./interfaces/ILocalCurrentSong";

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

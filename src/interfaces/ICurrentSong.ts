export default interface ICurrentSong {
	id: string;
	name: string;
	thumbnailUrl: string;
	author: {
		url: string;
		name: string;
	};
	url: string;
}

export default interface ISong {
	id: string | null;
	url: string | null;
	name: string | null;
	album: {
		url: string | null;
		name: string | null;
	}
	author: {
		url: string | null;
		name: string | null;
	};
	thumbnailUrl: string | null;
}

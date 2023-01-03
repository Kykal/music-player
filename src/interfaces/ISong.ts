export default interface ISong {
	id: string;
	url: string;
	name: string;
	album?: {
		url: string;
		name: string;
	}
	author: {
		url: string;
		name: string;
	};
	thumbnailUrl: string;
}

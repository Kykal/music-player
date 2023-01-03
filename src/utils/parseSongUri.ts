import ISong from "../interfaces/ISong";

export default (song: ISong): string => {
	const authorName = song!.author!.name!.toLowerCase().replaceAll(' ', '-');
	const songName = song!.name!.toLowerCase().replaceAll(' ', '-');

	return `${authorName}-${songName}-${song.id}`;
}

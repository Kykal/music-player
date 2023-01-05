import ISong from "../interfaces/ISong";

export default (song: ISong): string => {
	const authorName = song!.author!.name!.toLowerCase().replaceAll(' ', '-').replaceAll('\'', '');
	const songName = song!.name!.toLowerCase().replaceAll(' ', '-').replaceAll('\'', '');

	return `music/${authorName}-${songName}-${song.id}.mp3`;
}

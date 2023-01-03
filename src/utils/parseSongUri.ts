import ISong from "../interfaces/ISong";

export default (song: ISong): string => {
	return `${song.author.name.toLowerCase().replaceAll(' ', '-')}-${song.name.toLowerCase().replaceAll(' ', '-')}-${song.id}`;
}

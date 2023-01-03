import axios from "axios";


//Interfaces
import ISong from "../interfaces/ISong";


const getSongById = async (id: string): Promise<ISong> => {

	const {data} = await axios.get('data.json');

	return data.filter( (song: ISong) => song.id === id )[0];
}



export default getSongById;

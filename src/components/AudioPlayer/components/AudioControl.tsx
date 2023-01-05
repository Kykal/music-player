import React, { useState, ChangeEvent, useEffect, useContext } from 'react';


//Context
import CurrentSongContext from '../../../contexts/CurrentSong/CurrentSongContext';

//Icons
import { HiSpeakerWave } from 'react-icons/hi2';


//Components
import IconButton from '../../UI/IconButton';


//Styled components
import styled			from 'styled-components';

const Container = styled.div({
	display: 'flex',
	justifyContent: 'flex-end',
	alignItems: 'center',
});


//Interfaces
interface IProps {
	playingSong: HTMLAudioElement | null;
}


//Main component content
const AudioControl = ({playingSong}: IProps): JSX.Element => {


	const currentSong = useContext(CurrentSongContext);
	const [ volume, setVolume ] = useState<number>(100);


	useEffect( () => {
		if( !playingSong )
			return;

		playingSong!.volume = volume/100;
	}, [playingSong] );

	//Description. What does this?
	const volumeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		const newValue = parseFloat(event.target.value);
		
		setVolume(newValue);
		playingSong!.volume = newValue/100;
	};

	//Main component render
	return (
		<Container id='song-volume' >
			<input
				type="range"

				value={volume}

				min={0}
				max={100}

				onChange={volumeHandler}
			/>
			<IconButton >
				<HiSpeakerWave
					fontSize='1.5em'
					color='var(--strong-gray)'
				/>
			</IconButton>
		</Container>
	);
};


export default AudioControl; //Export main component

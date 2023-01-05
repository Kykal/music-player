import React, { useState, ChangeEvent, useEffect, useContext } from 'react';


//Context
import CurrentSongContext from '../../../contexts/CurrentSong/CurrentSongContext';

//Icons
import { HiSpeakerWave, HiSpeakerXMark } from 'react-icons/hi2';


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
	const [ previousVolume, setPreviousVolume ] = useState<number>(100);


	useEffect( () => {
		if( !playingSong )
			return;

		playingSong!.volume = volume/100;
	}, [playingSong] );


	//Save previous volume value
	useEffect( () => {
		//Do not save when volume is 0 (muted)
		if( volume === 0 )
			return;
		
		setPreviousVolume(volume);
	}, [volume] );


	//Set new volume value
	const volumeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		const newValue = parseFloat(event.target.value);
		
		setVolume(newValue);
		playingSong!.volume = newValue/100;
	};


	//Mute or unmute song
	const toggleVolume = () => {
		if( volume === 0 ){
			setVolume(previousVolume);
			playingSong!.volume = previousVolume/100;
			return;
		}

		setVolume(0);
		playingSong!.volume = 0;
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
			<IconButton onClick={toggleVolume} >
				{volume === 0 ? (
						<HiSpeakerXMark
							fontSize='1.5em'
							color='var(--strong-gray)'
						/>
					) : (
						<HiSpeakerWave
							fontSize='1.5em'
							color='var(--strong-gray)'
						/>
				)}
			</IconButton>
		</Container>
	);
};


export default AudioControl; //Export main component

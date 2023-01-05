import React, { useState, useContext, useEffect } from 'react';


//Context
import CurrentSongContext from '../../../contexts/CurrentSong/CurrentSongContext';


//Icons
import { AiFillStepBackward, AiFillStepForward } from 'react-icons/ai';


//Components
import IconButton	from '../../UI/IconButton';
import ToggleControl from './ToggleControl';


//Styled components
import styled			from 'styled-components';


const Container = styled.div({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
});


//Interfaces
interface IProps {
	playingSong: HTMLAudioElement | null;
}

//Main component content
const PlayControl = ({playingSong}: IProps): JSX.Element => {

	const currentSong = useContext(CurrentSongContext);

	const [ isPlaying, setIsPlaying ] = useState<boolean>(true);

	useEffect( () => {
		setIsPlaying(true);
	}, [currentSong] );

	//Description. What does this?
	const toggleAudio = () => {
		if( isPlaying ){
			playingSong?.pause();
			setIsPlaying(false);
			return;
		}	

		playingSong?.play();
		setIsPlaying(true);
	};

	//Main component render
	return (
		<Container id='song-controls' >
			<ToggleControl
				isPlaying={isPlaying}
				toggleAudio={toggleAudio}
			/>
		</Container>
	);
};


export default PlayControl; //Export main component

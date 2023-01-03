import React, { useContext } from 'react';


//Components
import PlayControl	from './components/PlayControl';
import SongDisplay	from './components/SongDisplay';
import SliderRange	from './components/SliderRange';


//Styled components
import styled from 'styled-components';
import CurrentSongContext from '../../contexts/current-song-context';


const Container = styled.div({
	position: 'absolute',
	bottom: 0,
	width: '100vw',
});


const AudioTrack = styled.div({
	width: '100%',
	'&:hover > progress': {
		height: '0.4em',
	},
});


const AudioTable = styled.div({
	padding: '0.5em',
	height: '5em',
	display: 'flex',
	'& div:is(#song-display, #song-controls)': {
		width: '33%',
	}
}); 

//Main component content
const AudioPlayer = (): JSX.Element => {

	const { url } = useContext(CurrentSongContext);

	//Main component render
	return (
		<Container id='audio-player' >
			<AudioTrack>
				<SliderRange />
			</AudioTrack>
			<AudioTable>
				<SongDisplay />
				<PlayControl />
				<div>
					a
				</div>
			</AudioTable>
			<audio
				preload='metadata'
				src={url}
			/>
		</Container>
	);
};


export default AudioPlayer; //Export main component
